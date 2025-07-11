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

	return server.server;
}
