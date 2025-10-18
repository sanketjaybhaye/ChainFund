pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum,string name,string description,string image,uint target,uint deadline) public {
        address newCampaign = new Campaign(minimum, msg.sender,name,description,image,target,deadline);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}


contract Campaign {
  enum CampaignState { Active, Cancelled, Successful, Failed }
  struct Request {
      string description;
      uint value;
      address recipient;
      bool complete;
      uint approvalCount;
      mapping(address => bool) approvals;
  }

  Request[] public requests;
  address public manager;
  uint public minimunContribution;
  string public CampaignName;
  string public CampaignDescription;
  string public imageUrl;
  uint public targetToAchieve;
  address[] public contributers;
  mapping(address => bool) public approvers;
  mapping(address => uint) public contributions;
  uint public approversCount;
  uint public deadline;
  CampaignState public state;


  modifier restricted() {
      require(msg.sender == manager);
      _;
  }

  function Campaign(uint minimun, address creator,string name,string description,string image,uint target,uint _deadline) public {
      manager = creator;
      minimunContribution = minimun;
      CampaignName=name;
      CampaignDescription=description;
      imageUrl=image;
      targetToAchieve=target;
      deadline=_deadline;
      state = CampaignState.Active;
  }

  function contibute() public payable {
      require(state == CampaignState.Active);
      require(now <= deadline);
      require(msg.value > minimunContribution );

      if (!approvers[msg.sender]) {
        contributers.push(msg.sender);
        approvers[msg.sender] = true;
        approversCount++;
      }
      contributions[msg.sender] += msg.value;
  }

  function createRequest(string description, uint value, address recipient) public restricted {
      require(state == CampaignState.Active);
      Request memory newRequest = Request({
         description: description,
         value: value,
         recipient: recipient,
         complete: false,
         approvalCount: 0
      });

      requests.push(newRequest);
  }

  function approveRequest(uint index) public {
      require(approvers[msg.sender]);
      require(state == CampaignState.Active);
      require(!requests[index].approvals[msg.sender]);

      requests[index].approvals[msg.sender] = true;
      requests[index].approvalCount++;
  }

  function finalizeRequest(uint index) public restricted{
      require(state == CampaignState.Active);
      require(requests[index].approvalCount > (approversCount / 2));
      require(!requests[index].complete);

      requests[index].recipient.transfer(requests[index].value);
      requests[index].complete = true;

  }

  function abort() public restricted {
      require(state == CampaignState.Active);
      state = CampaignState.Cancelled;
  }

  function finalize() public {
      require(state == CampaignState.Active);
      require(now > deadline);
      if (this.balance >= targetToAchieve) {
          state = CampaignState.Successful;
      } else {
          state = CampaignState.Failed;
      }
  }

  function refund() public {
      require(state == CampaignState.Cancelled || state == CampaignState.Failed);
      uint amount = contributions[msg.sender];
      require(amount > 0);
      contributions[msg.sender] = 0;
      msg.sender.transfer(amount);
  }


    function getSummary() public view returns (uint,uint,uint,uint,address,string,string,string,uint,uint,uint) {
        return(
            minimunContribution,
            this.balance,
            requests.length,
            approversCount,
            manager,
            CampaignName,
            CampaignDescription,
            imageUrl,
            targetToAchieve,
            deadline,
            uint(state)
          );
    }

    function getRequestsCount() public view returns (uint){
        return requests.length;
    }
}
