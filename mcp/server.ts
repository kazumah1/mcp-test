/**
 * Auto-generated MCP Server (template)
 * 
 * This server provides a template tool for you to customize.
 * To add a new tool, use the template at the bottom of this file.
 */

import express from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js"
import { z } from "zod"

// ============================================================================
// SERVER CONFIGURATION
// ============================================================================

export default function createStatelessServer({
	config,
}: {
	config: any;
}) {
	const server = new McpServer({
		name: "generated-mcp-server",
		version: "1.0.0",
	});

	// ============================================================================
	// TEMPLATE TOOL
	// ============================================================================
	// Replace or add more tools as needed.

	server.tool(
		"reverseString",
		"Reverse a string value",
		{
			value: z.string().describe("String to reverse"),
		},
		async ({ value }) => {
			return {
				content: [
					{ type: "text", text: value.split("").reverse().join("") }
				]
			};
		}
	);

	server.tool(
		"capitalizeStringEvens",
		"Capitalize every even index of a string value",
		{
			value: z.string().describe("String to capitalize"),
		},
		async ({ value }) => {
			return {
				content: [
					{ type: "text", text: value.split("").map((char, index) => index % 2 === 0 ? char.toUpperCase() : char).join("") }
				]
			};
		}
	);

	server.tool(
		"capitalizeStringOdds",
		"Capitalize every odd index of a string value",
		{
			value: z.string().describe("String to capitalize"),
		},
		async ({ value }) => {
			return {
				content: [
					{ type: "text", text: value.split("").map((char, index) => index % 2 === 1 ? char.toUpperCase() : char).join("") }
				]
			};
		}
	);

	server.tool(
		'randomNumber',
		'Generate a random number between 0 and 1',
		{},
		async () => {
			return {
				content: [
					{ type: "text", text: Math.random().toString() }
				]
			};
		}
	);

	server.tool(
		'quadraticEquation',
		'Solve a quadratic equation',
		{
			a: z.number().describe('Coefficient of x^2'),
			b: z.number().describe('Coefficient of x'),
			c: z.number().describe('Constant term'),
		},
		async ({ a, b, c }) => {
			const discriminant = b * b - 4 * a * c;
			const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
			const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
			return {
				content: [
					{ type: "text", text: `Roots: ${root1}, ${root2}` }
				]
			};
		}
	);

	return server.server;
}
