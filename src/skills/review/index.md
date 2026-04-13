---
name: review
description: Review a pull request and provide feedback directly to the user (do not post comments on the PR).
version: 1.0.0
---

# Review PR

Review a pull request and provide feedback directly to the user (do not post comments on the PR).

## Usage

```
/review <pr-number>
```

## Instructions

When invoked with a PR number:

1. **Fetch the PR details** using `gh pr view <pr-number>` and `gh pr diff <pr-number>` to get the full context of the changes.

2. **Check for Jira ticket links** in the PR title, description, or branch name:
   - Look for patterns like `KEY-123`, `PROJ-456`, or full Jira URLs
   - If a ticket key is found, fetch the ticket details using `acli jira workitem view <KEY>` to get context about the requirements, acceptance criteria, and related discussion
   - Include this context when evaluating whether the PR fulfills its intended purpose

3. **Provide a General Overview**
   - Summarize the purpose and scope of the PR
   - What problem does it solve or what feature does it add?
   - How significant are the changes (small fix, medium feature, large refactor)?
   - If a Jira ticket was found, note the ticket key and briefly summarize the requirement

4. **List Concerns and Weaknesses**
   At the end, provide a section listing any:
   - Potential bugs or edge cases not handled
   - Security considerations
   - Performance concerns
   - Code quality issues (readability, maintainability)
   - Missing tests or documentation
   - Alternative approaches that might be worth considering
   - If a Jira ticket was found: whether the PR appears to fully address the requirements

   If there are no significant concerns, note that the changes look solid.

5. **Ask the user if they want more details**

6. **Walk Through the Changes by File, if desired**
   - For smaller PRs: describe each file individually
   - For larger PRs: group related files together (e.g., "API endpoints", "tests", "utilities")
   - For each file or group:
     - Describe what was changed and why
     - Highlight any notable patterns or approaches used
   - **For non-obvious changes**: Provide a step-by-step walkthrough explaining the logic, data flow, or reasoning behind the implementation

## Output Format

Structure your response as:

```
## Issue
[Short 1-2 sentance summary of the issue, if found]

## Overview [(level of complexity)]
[General summary of changes in the PR. Concise descriptions are best.]

## Concerns & Recommendations
[List any issues or suggestions, or note that changes look good]
```

then ask if the user would like a more detailed overview of the changes. If yes, structure your response as:

```
## Changes

### [filename or group name]
[Description of changes]

[Step-by-step walkthrough if needed]

### [next file/group]
...
```
