# 🌿 TerraAI — Touch Grass

### Less Screen Time. More Green Time.

TerraAI is a web-based outdoor activity recommendation project designed to encourage people to disconnect from their screens and reconnect with nature. It helps users discover simple outdoor activities based on their mood, available time, and personal interests.

Built using **HTML, CSS, and JavaScript**, TerraAI explores how open-source AI can make technology more meaningful by encouraging people to spend more time outdoors.

---

## 🌱 About the Project

In today's digital world, people spend a significant amount of time on their phones, computers, and social media. While technology is useful, spending too much time in front of screens can leave people feeling disconnected from the world around them.

TerraAI aims to address this problem by turning technology into a guide for real-world experiences.

Users can enter how they feel, select how much time they have, and choose an outdoor activity. The application then suggests a simple plan that they can follow in their garden, on their balcony, in a nearby park, or in another safe outdoor location.

**Our philosophy:** AI should not keep people on screens longer than necessary. It should help them discover experiences beyond the screen.

---

## 🎯 Project Objectives

* Encourage people to spend more time outdoors.
* Recommend activities based on mood, interests, and available time.
* Explore the use of open-weight AI models in a web application.
* Provide a simple, beginner-friendly user interface.
* Avoid requiring a local AI server such as Ollama.
* Demonstrate how web technologies can support real-world wellbeing and environmental awareness.

---

## ✨ Features

### 1. 🌳 Personalized Outdoor Activity Planner

Users can describe their mood and choose an activity category to receive a suggested outdoor plan.

### 2. 🧠 Open-Source AI Exploration

The project attempts to use Transformers.js with an open-weight model that runs through the browser. If the model cannot load, a built-in JavaScript recommendation system provides a fallback.

### 3. 🥾 Multiple Activity Categories

TerraAI supports several outdoor activity ideas:

* **Walking:** Explore your surroundings and practise mindful observation.
* **Gardening:** Water plants, grow seeds, or care for a small garden.
* **Birdwatching:** Listen for bird calls and observe wildlife respectfully.
* **Mindfulness:** Take a break to notice natural sounds, fresh air, and your surroundings.

### 4. ⏱️ Flexible Time Selection

Users can select a time limit, including 10, 20, 30, or 60 minutes, and find an activity that fits their schedule.

### 5. 🌙 Dark and Light Modes

A theme toggle allows users to switch between dark and light appearances.

### 6. 📱 Responsive Design

The interface is designed to adapt to different screen sizes, including desktop computers, tablets, and mobile devices.

### 7. 🔌 No Ollama Installation Required

TerraAI does not require Ollama or a locally installed Python environment. The website uses standard browser technologies and can optionally load an AI model over the internet.

---

## 🛠️ Technology Stack

| Technology                   | Purpose                                                            |
| ---------------------------- | ------------------------------------------------------------------ |
| HTML5                        | Defines the website structure and content                          |
| CSS3                         | Provides styling, layout, themes, and responsive design            |
| JavaScript                   | Implements user interactions and activity recommendations          |
| Transformers.js              | Provides browser-based access to supported machine-learning models |
| Hugging Face model ecosystem | Supplies open-weight models for experimentation                    |

---

## 📂 Project Structure

The repository contains the following files:

```text
TerraAI/
│
├── index.html    # Main webpage and planner interface
├── style.css     # Styling, layout, and dark mode
├── script.js     # Activity recommendation logic and AI integration
└── README.md     # Project documentation
```

**File descriptions**

* `index.html`: Contains the main webpage, input fields, activity selector, and results section.
* `style.css`: Defines the colors, typography, layout, responsive behaviour, and theme styles.
* `script.js`: Handles user input, generates activity recommendations, and attempts to load the browser-based AI model.
* `README.md`: Explains the project's purpose, features, setup, and future development plans.

---

## 🚀 Getting Started

Follow these instructions to run TerraAI on your computer.

### Prerequisites

You need:

* A modern web browser such as Chrome, Edge, or Firefox.
* Visual Studio Code or another code editor.
* An internet connection for loading the optional browser-based AI model and external dependencies.

No Python installation or Ollama setup is required.

### Step 1: Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/YOUR-USERNAME/TerraAI.git
```

Replace `YOUR-USERNAME` with your GitHub username and `TerraAI` with your actual repository name if different.

### Step 2: Open the Project

```bash
cd TerraAI
```

Open the folder in Visual Studio Code:

```bash
code .
```

Alternatively, open the folder through **File → Open Folder** in VS Code.

### Step 3: Run the Website

For a straightforward local preview:

1. Open Visual Studio Code.
2. Install the **Live Server** extension if you do not already have it.
3. Open `index.html`.
4. Right-click inside the editor.
5. Select **Open with Live Server**.

Your browser should open the TerraAI website.

You can also open `index.html` directly in a browser for basic testing. A local web server is recommended for module loading and browser compatibility.

---

## 🧠 How the AI Works

TerraAI is designed to combine browser-based machine learning with a lightweight fallback recommendation system.

### Browser-Based AI

The application attempts to load a supported model through Transformers.js. The model files are fetched over the internet when needed and processed in the browser where supported.

This approach avoids requiring a separately installed AI server such as Ollama.

### Fallback Recommendation System

If the AI model cannot load because of network problems, browser limitations, or a model-loading error, the application can use its built-in JavaScript recommendation logic.

This makes the basic activity-planning experience more resilient.

### Important Technical Note

The current prototype should be treated as an experimental AI project. A model must support the selected Transformers.js task and have compatible model files. If you change the model, verify that it supports the intended classification task and that the model identifier is valid.

The fallback system is rule-based or selection-based; it is not itself a generative AI model.

---

## 🔒 Privacy and Data Handling

TerraAI is designed to avoid requiring a user account or a dedicated application backend.

In the current prototype:

* Mood and activity inputs are processed by client-side JavaScript.
* No custom application server is required.
* No personal account is needed to try the planner.
* Loading a model from an external provider involves network requests.
* Browser storage, if used, remains subject to the user's browser settings.

**Privacy limitation:** The project has not been independently audited. External model downloads and third-party dependencies may contact their respective providers. Do not enter sensitive personal information.

---

## 🌍 Why Open-Source AI Matters

Open-source and open-weight AI tools give developers more flexibility to experiment, inspect supported implementations, adapt workflows, and choose models that fit their needs.

TerraAI explores several benefits of this approach:

* **Accessibility:** Developers can experiment with available models without building an AI model from scratch.
* **Flexibility:** The model can potentially be replaced with another compatible model.
* **Browser-based processing:** Supported inference can run on the user's device instead of requiring a dedicated model server.
* **Lower infrastructure requirements:** A simple prototype can run without managing a separate backend.
* **Learning and experimentation:** The project provides a practical way to explore AI integration using familiar web technologies.

Open-weight models are not automatically free of all restrictions, fully open-source in every respect, or guaranteed to run offline. Check the specific model's licence and technical requirements before deployment.

---

## 🧪 Example Use Case

Imagine a student who has been studying on a laptop for several hours and feels mentally tired.

1. The student opens TerraAI.
2. They enter: "I feel stressed and want to relax."
3. They select 20 minutes.
4. They choose walking or allow the planner to suggest an activity.
5. TerraAI provides a simple outdoor activity plan.
6. The student steps outside and takes a short break from the screen.

The goal is to make the digital interaction short and the real-world experience the main event.

---

## 🔮 Future Improvements

Potential future features include:

* Smarter mood-based activity matching.
* Optional location-aware activity suggestions.
* Local weather and seasonal recommendations.
* Garden planning based on local growing conditions.
* Bird identification using supported audio models.
* Accessibility options and additional languages.
* More activity categories, including cycling, hiking, and outdoor photography.
* A verified offline mode using compatible downloaded models.
* User testing to evaluate whether the recommendations actually encourage outdoor activity.
* A clearer AI status indicator showing whether the model or fallback system generated the recommendation.

These features are planned possibilities, not claims about functionality already implemented.

---

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork this repository.

2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes.

4. Test the application in your browser.

5. Commit your changes:

   ```bash
   git commit -m "Add your feature"
   ```

6. Push your branch and open a pull request.

Please describe your changes clearly and include screenshots for significant interface updates.

---

## 📜 Licence

This project can be released under the MIT License. Before publishing, add a `LICENSE` file containing the MIT License text and confirm that any third-party model, library, font, or asset licences permit your intended use.

The licence for TerraAI's code does not automatically change the licence of its AI model or dependencies.

---

## 👩‍💻 Author

**Created as an open-source AI and web development project.**

GitHub: `https://github.com/YOUR-USERNAME`

Replace the placeholder with your GitHub profile before publishing.

---

## 🌿 Final Thought

**Technology should connect us with life, not distract us from it.**

TerraAI explores a simple idea: use AI to inspire people to put their devices down, step outside, and discover the world around them.

If this project inspires you, give the repository a ⭐ and help make technology a little greener.

#TouchGrass #TerraAI #OpenSourceAI #TransformersJS #HTML #CSS #JavaScript #HuggingFace

