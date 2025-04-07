# Peer Coding Guide: Driver–Navigator Method

This workshop is designed for collaborative learning. You and a partner will work together using the **Driver–Navigator** technique and GitHub collaboration tools.

---

## Peer Coding Roles: Driver and Navigator

| Role                | Description                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------- |
| **Driver**    | Types the code, runs the tests, and follows the Navigator's lead. (Nayland College Student) |
| **Navigator** | Reads instructions, plans logic, and reviews code as it's written. (NMIT Student)           |

- Switch roles every **10–15 minutes**
- Both partners should discuss each decision
- Don’t code silently — always think and talk together!

---

## How to Work Together on GitHub

### Option 1 (Recommended): One Fork per Pair

This approach allows both students to collaborate in a single GitHub repository.

### Step-by-Step Instructions:

1. **One student forks the main repository**

   - Go to the main repo (your instructor's)
   - Click the **"Fork"** button (top-right of GitHub page)
2. **Clone the fork to your computer**

   ```bash
   git clone https://github.com/your-username/function-flow-js.git
   cd function-flow-js
   ```
3. **Invite your partner as a collaborator**

   - Go to your fork on GitHub
   - Click **Settings → Manage access**
   - Click **Invite a collaborator**
   - Enter your partner's GitHub username or email
   - They will receive an email or notification to accept
4. **Work together on the same repository**

   - Open the folder in VS Code (or your preferred editor)
   - Take turns as Driver and Navigator
   - Commit and push changes together:
     ```bash
     git add .
     git commit -m "Completed activity 01"
     git push
     ```
5. **Navigator pulls the latest changes**

   ```bash
   git pull origin main
   ```

---

## Alternative: Screen Share or Live Share

If you're unable to share access or working remotely, try this:

- Use **screen sharing** via Zoom, Teams, or Discord
- Use **VS Code Live Share** to work together in real time
- Only one person (Driver) types; the other (Navigator) talks and guides
- Switch roles often, and copy code back to your own fork when needed

---

## Best Practices

- Review TODOs and instructions together before starting
- Use `console.log()` to debug and explain what’s happening
- Run:
  ```bash
  node starter/filename.js
  npm test
  ```
- Discuss test results and code changes as a team
- Help each other understand — not just finish

---

## Summary

| Task                      | Who       | Description                            |
| ------------------------- | --------- | -------------------------------------- |
| Fork the repo             | 1 student | Creates shared repo copy               |
| Add collaborator          | 1 student | Gives partner write access to fork     |
| Switch roles              | Both      | Every 10–15 mins                      |
| Run & debug code          | Driver    | Uses Node.js + test results            |
| Guide & review            | Navigator | Thinks out loud, suggests improvements |
| Push changes to GitHub    | Driver    | After completing an activity           |
| Pull updates from partner | Navigator | Keeps fork in sync                     |

Happy coding!
