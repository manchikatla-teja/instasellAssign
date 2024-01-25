import "./Center.css";

import ordericon from "../icons/OrderIcon.svg";
import viewicon from "../icons/ViewIcon.svg";
import pie from "../icons/pie.svg";
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
	Tabs,
	TabProps,
	Icon,
} from "@shopify/polaris";
import { OrderIcon, PlusCircleIcon } from "@shopify/polaris-icons";
import calendar from "../icons/calendar.svg";
import { isPropertySignature } from "typescript";

interface props {
	name: string;
	num: string;
	bgColor: string;
}

const StatTab = (props: props) => {
	return (
		<div className="statTab" style={{ backgroundColor: props.bgColor }}>
			<div
				style={{
					fontWeight: "750",
					fontSize: "12px",
					lineHeight: "16px",
					width: "383px",
					height: "16px",
				}}
			>
				{props.name}
			</div>
			<div
				style={{
					fontWeight: "700",
					fontSize: "36px",
					lineHeight: "48px",
					width: "383px",
					height: "48px",
				}}
			>
				<span>{props.num}</span>
				<div
					style={{
						width: "56px",
						height: "56px",
						position: "relative",
						top: "-60px",
						left: "300px",
					}}
				>
					{props.name == "Orders" && <img src={ordericon}></img>}
					{props.name != "Orders" && <img src={viewicon}></img>}
				</div>
			</div>
		</div>
	);
};

const tabs = [
	{
		id: "LifeTime",
		content: "LifeTime",
	},
];

interface filter {
	name: string;
	icon?: any;
	selected?: boolean;
}

const FilterTab = (prop: filter) => {
	return (
		<div
			style={{
				backgroundColor: prop.selected ? "#F8F7FF" : "white",
				padding: "8px 12px 8px 12px",
				width: "fit-content",
				height: "36px",
				borderRadius: "4px",
				display: "flex", //useful if we want to put icons besdie them
				gap: "8px",
				border: prop.selected ? "1px solid #8051FF" : "none",
			}}
		>
			{prop.name}
			{prop.icon && <img src={prop.icon} width="20px" height="20px"></img>}
		</div>
	);
};

const FilterTabInPie = (prop: filter) => {
	return (
		<div
			style={{
				backgroundColor: prop.selected ? "#FFF1E3" : "#F1F1F1",
				padding: "8px 12px 8px 12px",
				width: "fit-content",
				height: "36px",
				borderRadius: "4px",
				display: "flex", //useful if we want to put icons besdie them
				gap: "8px",
				border: prop.selected ? "1px solid #E3E3E3" : "none",
			}}
		>
			{prop.name}
		</div>
	);
};

interface colorFilter {
	color: string;
	text: string;
}

const ColorFilterTag = (prop: colorFilter) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				gap: "8px",
				alignItems: "center",
			}}
		>
			<div
				style={{
					width: "20px",
					height: "10px",
					borderRadius: "5px",
					backgroundColor: prop.color,
				}}
			></div>
			<div>
				<Text as="h2" variant="bodyLg" fontWeight="medium">
					{prop.text}
				</Text>
			</div>
		</div>
	);
};


export const Center = () => {
	return (
		<>
			<div className="Center">
				<Text as="h2" alignment="start" variant="headingXl">
					<div
						style={{
							color: "#4A4A4A",
							top: "40px",
							left: "68px",
							position: "absolute",
						}}
					>
						Instant Dive into Your Performance Metrics
					</div>
				</Text>

				<div className="filterTabBar">
					<FilterTab name="LifeTime" selected={true}></FilterTab>
					<FilterTab name="Last Week"></FilterTab>
					<FilterTab name="Last Month"></FilterTab>
					<FilterTab name="Last Year"></FilterTab>
					<FilterTab name="Customize Time Line" icon={calendar}></FilterTab>
				</div>

				<div
					style={{
						position: "absolute",
						top: "175px",
						left: "69px",
						width: "447px",
						height: "368px",
					}}
				>
					<Card roundedAbove="sm">
						<BlockStack gap="400">
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<Text as="h2" variant="headingMd" fontWeight="bold">
									Shipment Updates
								</Text>
								<Text as="h2" variant="bodyLg" fontWeight="medium">
									Total Orders: 394
								</Text>
							</div>

							<div className="filterTabBarInPie">
								<FilterTabInPie
									name="Delivered"
									selected={true}
								></FilterTabInPie>
								<FilterTabInPie name="Out for delivery"></FilterTabInPie>
								<FilterTabInPie name="Intransit"></FilterTabInPie>
								<FilterTabInPie name="Pending"></FilterTabInPie>
								<FilterTabInPie name="Exception"></FilterTabInPie>
							</div>

							<div style={{position:"relative", top:"6px", left:"128px", margin:"5.5px 0px"}}>
							<img src={pie} width="160px" height="160px"></img>
							</div>

							<div style={{width:"416px", height:"56px", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
								<div
									style={{ display: "flex", flexDirection: "row", gap: "8px" }}
								>
									<ColorFilterTag
										color="#5E4200"
										text="Exception"
									></ColorFilterTag>
									<ColorFilterTag
										color="#956F00"
										text="Intransit"
									></ColorFilterTag>
									<ColorFilterTag
										color="#E5A500"
										text="Pending"
									></ColorFilterTag>
								</div>

								<div
									style={{ display: "flex", flexDirection: "row", gap: "8px" }}
								>
									<ColorFilterTag
										color="#FFC879"
										text="Delivered"
									></ColorFilterTag>
									<ColorFilterTag
										color="#FFDDB6"
										text="Out for delivery"
									></ColorFilterTag>
								</div>
							</div>
							
							
						</BlockStack>
					</Card>
				</div>

				<div
					style={{
						position: "absolute",
						width: "216px",
						height: "368px",
						padding: "16px 44px 24px 16px",
						gap: "24px",
						top: "175px",
						left: "532px",
						borderRadius: "12px",
						backgroundColor: "#956F00",
						color: "white",
					}}
				>
					<div //is the color in the box
						style={{
							width: "70px",
							height: "70px",
							borderRadius: "50%",
							backgroundColor: "#FFEBD5",
							opacity: "20%",
							position: "absolute",
							top: "198px",
							left: "149px",
							boxShadow: "0px 0px 3px 3px #FFEBD5",
						}}
					></div> {/*circle in the box ends */}

					<BlockStack gap="400">
						<Text as="h2" variant="headingMd">
							Star Facts about your orders!!!
						</Text>
						<BlockStack gap="600">
							<Text as="h6" variant="bodyMd" fontWeight="regular">
								There are 8 shipments that have been in out for delivery for
								more than 3 days.
							</Text>
							<Text as="h6" variant="bodyMd" fontWeight="regular">
								There are 5 shipments in exception right now
							</Text>
							<Text as="h6" variant="bodyMd" fontWeight="regular">
								The maximum chargebacks are from Miami.
							</Text>

							<Button>Check Orders Page</Button>
						</BlockStack>
					</BlockStack>
				</div>

				<div
					style={{
						position: "absolute",
						top: "175px",
						left: "765px",
						width: "447px",
						height: "368px",
					}}
				>
					<Card roundedAbove="sm">
						<BlockStack gap="200">
							<Text as="h2" variant="headingMd" fontWeight="bold">
								Tracking Page Views Vs Orders
							</Text>
							<Box paddingBlockStart="200">
								<Text as="h6" variant="bodyMd">
									Understand user engagement patterns and optimize your tracking
									page for enhanced customer experiences.
								</Text>
							</Box>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "20px",
									margin: "12px 0px",
								}}
							>
								<StatTab name="Orders" num="80" bgColor="#FFEBD5"></StatTab>
								<StatTab
									name="Tracking Page Views"
									num="44"
									bgColor="#FFC879"
								></StatTab>
							</div>
						</BlockStack>
					</Card>
				</div>
			</div>
		</>
	);
};
