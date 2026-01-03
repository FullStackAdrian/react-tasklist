---
description: An explication of arquitecture of the project. 
---
# Project Architecture

This is a React application following a **feature-based architecture** with **custom hooks as the main unit of logic**, **presentational UI components**, and **thin pages used only for orchestration**.

The project is designed to enforce:
- Clean separation of concerns
- No business logic in pages
- Centralized domain logic in hooks
- Predictable and scalable data flow

## Project Structure

src
├── App.jsx
├── main.jsx
├── assets
├── controllers
├── layouts
├── features
│ ├── Auth
│ │ └── hooks
│ │ └── useAuth.jsx
│ └── TaskList
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── schema
│   └── ui
├── index.css


All new functionality **must be implemented inside a feature folder** under `/src/features`.

---

## Feature-Based Architecture

Each feature is fully isolated and self-contained.

A feature may contain:

- `hooks/` → all logic and state (domain + forms)
- `components/` → connect hooks with UI components
- `pages/` → orchestration only (no logic)
- `schema/` → Zod schemas for form validation
- `ui/` → presentational components (dumb components)

Features **must not access internal files of other features**.

---

## Hooks Architecture

Custom hooks are the **core of the application logic**.

### General Hook Rules

- All business and domain logic lives in hooks
- Hooks are the only place where state is allowed
- Hooks may call other hooks
- Hooks must be deterministic and predictable
- Hooks must not contain UI concerns

### Hook Types

#### Domain Hooks

Examples:
- `useTaskList.jsx`
- `useFilteredList.jsx`

Responsibilities:
- Own domain state (tasks, filters, derived data)
- Apply business rules (sorting, filtering, transformations)
- Expose intent-based APIs (`addTask`, `applyFilter`, etc.)

Domain hooks decide **what happens**, never **how it is rendered**.

---

#### Form Hooks

Examples:
- `useTaskForm.jsx`
- `useFilterForm.jsx`

Responsibilities:
- Manage form state using `react-hook-form`
- Apply Zod validation schemas
- Emit validated data on submit

Form hooks **do not contain business logic**.

---

## Components vs UI Components

### UI Components (`ui/`)

Examples:
- `taskList.jsx`
- `taskItem.jsx`
- `taskForm.jsx`
- `filterTaskBar.jsx`

Rules:
- No business logic
- No domain state
- No data transformations
- Receive data and callbacks via props only
- Focus exclusively on rendering

UI components must be pure and reusable.

---

### Feature Components (`components/`)

Examples:
- `taskFormComponent.jsx`
- `filterBarFormComponent.jsx`
- `taskListComponent.jsx`

Responsibilities:
- Connect hooks to UI components
- Translate hook APIs into UI props
- Handle form submission events

Feature components **do not contain domain logic**.

---

## Pages

Examples:
- `taskListPage.jsx`

Rules:
- Pages are orchestration layers only
- Pages do not contain business logic
- Pages do not contain state
- Pages do not filter, sort, or transform data
- Pages wire components together

Correct page behavior:
- Call hooks
- Pass callbacks and data to components
- Render layout

If logic appears in a page, it is considered architectural debt.

---

## Data Flow

The application enforces a unidirectional data flow:

UI → Component → Hook → Domain Logic → Hook → Component → UI



- Forms emit validated data
- Hooks decide how data is processed
- Pages only connect parts together
- UI renders the result

---

## Schemas

Schemas live in `schema/` directories inside features.

Examples:
- `taskFormSchema.jsx`
- `filterTaskBarSchema.jsx`

Rules:
- Schemas define validation rules only
- No business logic inside schemas
- Used exclusively by form hooks

---

## Auth Feature

The Auth feature encapsulates authentication logic.

- Authentication logic lives in `useAuth.jsx`
- No UI or pages are defined inside the Auth feature (currently)
- Auth state and actions are exposed through hooks

---

## Anti-Patterns (Forbidden)

- Business logic inside pages
- Filtering or sorting inside components
- Duplicated or derived state stored separately
- Passing domain data through forms
- Mixing domain logic with form logic
- UI components using domain hooks

---

## Coding Standards

- Use **TypeScript** for all new files
- Follow existing naming conventions
- Keep files focused on a single responsibility
- Write tests for all new features
- Prioritize testing domain hooks and filtering logic
