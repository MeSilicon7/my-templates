# COPILOT EDITS OPERATIONAL GUIDELINES
                
## PRIME DIRECTIVE
- Avoid working on more than one file at a time.
- Multiple simultaneous edits to a file will cause corruption.
- Be conversational and teach about what you are doing while coding.

## LARGE FILE & COMPLEX CHANGE PROTOCOL

### MANDATORY PLANNING PHASE
When working with large files (>300 lines) or complex changes:
1. ALWAYS start by creating a detailed plan BEFORE making any edits
2. Your plan MUST include:
   - All functions/sections that need modification
   - The order in which changes should be applied
   - Dependencies between changes
   - Estimated number of separate edits required

3. Format your plan as:
   ```
   ## PROPOSED EDIT PLAN
   Working with: [filename]
   Total planned edits: [number]
   
   ### Edit sequence:
   1. [First specific change] - Purpose: [why]
   2. [Second specific change] - Purpose: [why]
   3. Do you approve this plan? I'll proceed with Edit [number] after your confirmation.
   ```
4. WAIT for explicit user confirmation before making ANY edits when user approves edit [number]
            
### MAKING EDITS
- Focus on one conceptual change at a time
- Include concise explanations of what changed and why
- Always check if the edit maintains the project's coding style

### EXECUTION PHASE
- After each individual edit, clearly indicate progress:
  "✅ Completed edit [#] of [total]. Ready for next edit?"
- If you discover additional needed changes during editing:
  - STOP and update the plan
  - Get approval before continuing
                
### REFACTORING GUIDANCE
When refactoring large files:
- Break work into logical, independently functional chunks
- Ensure each intermediate state maintains functionality
- Consider temporary duplication as a valid interim step
- Always indicate the refactoring pattern being applied
                
### RATE LIMIT AVOIDANCE
- For very large files, suggest splitting changes across multiple sessions
- Prioritize changes that are logically complete units
- Always provide clear stopping points
            
## General Requirements
Use modern technologies as described below for all code suggestions. Prioritize clean, maintainable code with appropriate comments.
            
### Application Entry Point

The main entry point for the application will be `workers/app.ts`. This file will set up the Hono app, middleware, and routes. It will also serve the React Router app.

## Writing API Guidelines
This application will use Hono as the web server. We will write APIs in Hono and use Drizzle ORM for database interactions. `workers/app.ts` will be the entry point for the application and will set up the Hono app, middleware, and routes. The same Hono app will also serve the React Router app.

### UI 
For the UI, use React components with Tailwind CSS for styling.

### Form Handling
Use React Hook Form for form handling and validation.

### State Management
Use `useState` for local component state management and Zustand for global state management.

## Folder Structure

Follow this structured directory layout:

```
.
├── app (frontend React Router 7 app)
│   ├── app.css
│   ├── components
│   ├── entry.server.tsx
│   ├── root.tsx
│   ├── routes (folder for React Router routes)
│   │   └── home.tsx
│   └── routes.ts (React Router routes)
├── bun.lock
├── drizzle.config.ts
├── LICENSE
├── package.json
├── public
│   └── favicon.ico
├── react-router.config.ts
├── README.md
├── tsconfig.cloudflare.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── worker-configuration.d.ts
├── workers
│   ├── app.ts (main entry point and Hono app setup)
│   ├── db (Drizzle ORM related files)
│   │   ├── create-db-client.ts
│   │   ├── README.md
│   │   └── schema.ts
│   ├── README.md
│   └── validation-schemas (Zod schemas for validation)
│       ├── index.ts
│       ├── README.md
│       └── user.ts
└── wrangler.jsonc (Cloudflare Workers configuration)
```

## Documentation Requirements
- Include JSDoc comments for JavaScript/TypeScript
- Document complex functions with clear examples
- Maintain concise Markdown documentation
- Minimum docblock info: `@param`, `@return`, `@throws`, `@author`
    
## Database Requirements
- Use Drizzle ORM for all database interactions
    
## Security Considerations
- Use Zod for API request validation and using zValidator middleware in Hono routes
- Sanitize all user inputs to prevent injection attacks

## Authentication & Authorization
- For Authentication, Authorization and SSO, I am using better-auth.