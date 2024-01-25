import React, { useState } from "react";
import {
	ActionList,
	BlockStack,
	Box,
	Button,
	ButtonGroup,
	Card,
	InlineStack,
	Link,
	List,
	Popover,
	Text,
	TextField,
} from "@shopify/polaris";
import "./Bottom.css";
import paypal from "../icons/paypal.svg"
import gooana from "../icons/gooana.svg"
import alireviews from "../icons/alireviews.svg"
import instafeed from "../icons/instafeed.svg"
import shopify from "../icons/shopify.svg"

interface color {
	color: string;
}

const ColorBlock = (color: color) => {
	return (
		<div
			style={{
				width: "64px",
				height: "32px",
				borderRadius: "8px",
				backgroundColor: color.color,
			}}
		></div>
	);
};

const CompanyIcon = (companyIcon:any)=>{
	return (
		<div style={{width:"34px", height:"34px"}}>
			<img src={companyIcon.companyIcon}></img>
		</div>
	)
}

export const Bottom = () => {
	return (
		<>
			<Text as="h2" alignment="start" variant="headingXl">
				<div
					style={{
						color: "#4A4A4A",
						top: "1067px",
						left: "68px",
						position: "absolute",
					}}
				>
					Discover the Heart of Our Functionality
				</div>
			</Text>

			<div className="cardBottom1">
				<Card roundedAbove="sm" background="bg-surface">
					<BlockStack gap="600">
						<BlockStack gap="200">
							<Text as="h2" variant="headingMd">
								<div style={{ color: "#4A4A4A" }}>
									Elevate Your Brand Aesthetics with Custom Tracking Page Styles
								</div>
							</Text>
							<Text as="h3" variant="bodyMd" fontWeight="medium">
								<div style={{ color: "#4A4A4A" }}>
									Immerse your customers in a branded experience by
									personalizing the colors on your tracking page.{" "}
								</div>
							</Text>
						</BlockStack>

						<BlockStack gap="200">
							<div
								style={{ display: "flex", gap: "16px", alignItems: "flex-end" }}
							>
								<div style={{ width: "220px", height: "56px" }}>
									<TextField
										label="Accent Color"
										type="text"
										value="FF9898"
										autoComplete="text"
										helpText={<span></span>}
									/>
								</div>
								<ColorBlock color="#FF9898"></ColorBlock>
							</div>
							<div
								style={{ display: "flex", gap: "16px", alignItems: "flex-end" }}
							>
								<div style={{ width: "220px", height: "56px" }}>
									<TextField
										label="Text Color"
										type="text"
										value="571010"
										autoComplete="text"
										helpText={<span></span>}
									/>
								</div>
								<ColorBlock color="#571010"></ColorBlock>
							</div>
							<div
								style={{ display: "flex", gap: "16px", alignItems: "flex-end" }}
							>
								<div style={{ width: "220px", height: "56px" }}>
									<TextField
										label="Background Color"
										type="text"
										value="FFEAEA"
										autoComplete="text"
										helpText={<span></span>}
									/>
								</div>
								<ColorBlock color="#FFEAEA"></ColorBlock>
							</div>
						</BlockStack>

						<InlineStack align="start">
							<ButtonGroup>
								<Button onClick={() => {}} accessibilityLabel="Edit shipment">
									Preview
								</Button>
								<Button
									variant="primary"
									onClick={() => {}}
									accessibilityLabel="Add tracking number"
								>
									Apply Colors
								</Button>
							</ButtonGroup>
						</InlineStack>
					</BlockStack>
				</Card>
			</div>

			<div className="cardBottom2">
				<Card roundedAbove="sm" background="bg-surface" >
					<BlockStack gap="600">
						<BlockStack gap="200">
							<Text as="h2" variant="headingMd">
								<div style={{ color: "#4A4A4A" }}>
									Exclusive Onboarding Support for High-Volume Brands
								</div>
							</Text>
							<Text as="h3" variant="bodyMd" fontWeight="medium">
								<div style={{ color: "#4A4A4A" }}>
									Unlock personalized guidance! Book a one-on-one onboarding
									call to streamline your experience.
								</div>
							</Text>
						</BlockStack>

						<InlineStack align="start">
							<ButtonGroup>
								<Button
									variant="primary"
									onClick={() => {}}
									accessibilityLabel="Add tracking number"
								>
									Schedule A Call
								</Button>
							</ButtonGroup>
						</InlineStack>
					</BlockStack>
				</Card>
			</div>

			<div className="cardBottom3">
				<Card roundedAbove="sm" background="bg-surface">
					<BlockStack gap="400">
						<BlockStack gap="200">
							<Text as="h2" variant="headingMd">
								<div style={{ color: "#4A4A4A" }}>
									Explore Our Integrated Ecosystem
								</div>
							</Text>
							<Text as="h3" variant="bodyMd" fontWeight="medium">
								<div style={{ color: "#4A4A4A" }}>
									Discover a variety of popular integrations tailored for your
									convenience.{" "}
								</div>
							</Text>
						</BlockStack>
						<div style={{display:"flex", flexDirection:"row", gap:"24px", margin:"6px 0px 10px 0px"}}>
							<CompanyIcon companyIcon={paypal}></CompanyIcon>
							<CompanyIcon companyIcon={alireviews}></CompanyIcon>
							<CompanyIcon companyIcon={instafeed}></CompanyIcon>
							<CompanyIcon companyIcon={gooana}></CompanyIcon>
							<CompanyIcon companyIcon={shopify}></CompanyIcon>
						</div>
						<InlineStack align="start">
							<ButtonGroup>
								<Button
									variant="primary"
									onClick={() => {}}
									accessibilityLabel="Add tracking number"
								>
									Explore Integrations
								</Button>
							</ButtonGroup>
						</InlineStack>
					</BlockStack>
				</Card>
			</div>

			<div className="cardBottom4">
				<Card roundedAbove="sm" background="bg-surface">
					<BlockStack gap="600">
						<BlockStack gap="200">
							<Text as="h2" variant="headingMd">
								<div style={{ color: "#4A4A4A" }}>
									Seamlessly Integrate Custom HTML  Elements
								</div>
							</Text>
							<Text as="h3" variant="bodyMd" fontWeight="medium">
								<div style={{ color: "#4A4A4A" }}>
									Unleash creativity with our Custom HTML feature. Add links,
									custom messages, or any HTML content to elevate the tracking
									page experience for your customers.{" "}
								</div>
							</Text>
						</BlockStack>

						<TextField
							label="HTML Link"
							value={"Value"}
							multiline={5}
							autoComplete="off"
						/>

						<InlineStack align="start">
							<ButtonGroup>
								<Button onClick={() => {}} accessibilityLabel="Edit shipment">
									Preview
								</Button>
								<Button
									variant="primary"
									onClick={() => {}}
									accessibilityLabel="Add tracking number"
								>
									Apply Changes
								</Button>
							</ButtonGroup>
						</InlineStack>
					</BlockStack>
				</Card>
			</div>
		</>
	);
};
