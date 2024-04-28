/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure' 
import { schemaTypes } from "./schemas"; 

import { deskTool } from "sanity/desk";

import { codeInput } from "@sanity/code-input";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
// import {schema} from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: { types: schemaTypes },
  plugins: [deskTool(), visionTool(), codeInput()],
  name: "victoreke",
  title: "victoreke.com",
})
