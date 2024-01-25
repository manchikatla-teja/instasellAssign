import React, {useState} from 'react';
import {
  ActionList,
  BlockStack,
  Button,
  ButtonGroup,
  Card,
  InlineStack,
  Link,
  List,
  Popover,
  Text,
} from '@shopify/polaris';
import "./Intro.css"
import bg from "../icons/topbg.svg"
import { Welcome } from '../Welcome/Welcome';
import {Icon} from "@shopify/polaris";
import {InfoIcon,AlertTriangleIcon} from "@shopify/polaris-icons";


export const Intro = () =>{
  const [actionActive, toggleAction] = useState(false);

  const handleToggleAction = () => {
    toggleAction(!actionActive);
  };

  const items = [
    {content: 'Cancel shipment', destructive: true},
    {content: 'Add another shipment', disabled: true},
  ];

  const disclosureButtonActivator = (
    <Button disclosure accessibilityLabel="More" onClick={handleToggleAction}>
      More
    </Button>
  );

  const disclosureButton = (
    <Popover
      active={actionActive}
      activator={disclosureButtonActivator}
      onClose={handleToggleAction}
    >
      <ActionList items={items} />
    </Popover>
  );
  console.log(bg)
  return (
      <>
        <img src={bg}></img>
        <Welcome name="John Mathew"></Welcome>
    <div className="IntroCard IntroCard1">
    <Card roundedAbove="sm" background="bg-surface" padding='500'>
        <div className="cardContents">
        <div className="cardHeaderContents">
        <Text as="h2" variant="headingSm">
        <div className="introCardHeader introCardHeader1" style={{display:"flex"}}>
        Order Sync Successful!
        </div>
        </Text>
          <Text as="h3" variant="headingSm" fontWeight="medium">
          <div className="introCardInfo introCardInfo1">
           Your order details from the last 30 days have been successfully synced. Check them out now!
           </div>
          </Text>
          
        </div>
      <div className="cardButton">
            <Button
              variant="primary"
              onClick={() => {}}
              accessibilityLabel="Explore Your Orders"
            >
              Explore Your Orders
            </Button>
            </div>
        </div>
    </Card>
    </div>

    <div className="IntroCard IntroCard2">
    <Card roundedAbove="sm" background="bg-surface-caution"  padding='500'>
        <div className="cardContents">
        <div className="cardHeaderContents">
        <Text as="h2" variant="headingSm">
        <div className="introCardHeader introCardHeader2" style={{display:"flex"}}>
            <div style={{height:"20px", width:"20px"}}><Icon source={AlertTriangleIcon}></Icon></div>Customize Customer Notification
        </div>
        
        </Text>
          <Text as="h3" variant="headingSm" fontWeight="medium">
          <div className="introCardInfo introCardInfo2">
          Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers
          </div>
          </Text>
          
        
          </div>
      <InlineStack align="start">
          <div className="cardButton">
            <Button
              variant="primary"
              onClick={() => {}}
              accessibilityLabel="Explore Your Orders"
            >
              Configure Notifications
            </Button>
            </div>
        </InlineStack>
        </div>
    </Card>
    </div>


    <div className="IntroCard IntroCard3">
    <Card roundedAbove="sm" background="bg-surface-info"  padding='500'>
        <div className="cardContents">
        <div className="cardHeaderContents">
        <Text as="h2" variant="headingSm">
        <div className="introCardHeader introCardHeader3" style={{display:"flex"}}>
            <div style={{height:"20px", width:"20px"}}><Icon source={InfoIcon}></Icon></div> Your Tracking Link has been generated
        </div>
        </Text>
          <Text as="h3" variant="headingSm" fontWeight="medium">
          <div className="introCardInfo introCardInfo3">
          Include the <Link>Link</Link> to Your Store's Navigation Menu.
          </div>
          </Text>
          </div>
          
      <InlineStack align="start" gap='200'>
      <div className="cardButton">
            <Button
              onClick={() => {}}
              accessibilityLabel="Explore Your Orders"
              size="medium"
            >
                Copy Link
            </Button>
            </div>
            <div className="cardButton">
            <Button
              variant="primary"
              onClick={() => {}}
              accessibilityLabel="Explore Your Orders"
            >
              Go to Navigation Menu
            </Button>
            </div>
        </InlineStack>
        </div>
    </Card>
    </div>
    </>
  );
}