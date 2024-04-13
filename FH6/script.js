/* import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

        const API_KEY = "YOUR_API_KEY";
        const MODEL_NAME = "gemini-1.0-pro";

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const chatContainer = document.getElementById("chatContainer");

        async function sendMessage(message) {
            const result = await chat.sendMessage(message);
            const response = result.response;
            return response.text();
        }

        async function addMessage(role, text) {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add(role);
            messageDiv.innerText = text;
            chatContainer.appendChild(messageDiv);

            // Scroll to bottom of chat container
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        async function runChat() {
            const generationConfig = {
                temperature: 0.9,
                topK: 1,
                topP: 1,
                maxOutputTokens: 2048,
            };

            const safetySettings = [
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
            ];

            const chat = model.startChat({
                generationConfig,
                safetySettings,
                history: []
            });

            // Example conversation history for initial practice question
            const practiceQuestionHistory = [
                {
                    role: "user",
                    parts: [{ text: "Give me two practice driver education questions"}],
                },
                {
                    role: "model",
                    parts: [{ text: "## Driver's Ed Practice Questions:\n\n1. **You are approaching a railroad crossing with flashing red lights and the crossing gate is down. What should you do?**\n\n    A. Stop and proceed when the train passes and the gates go up. \n    B. Slow down and proceed with caution.\n    C. Stop and wait for the train to pass, even if the gates go up before the train arrives.\n    D. Make a U-turn and find an alternate route. \n\n2. **When driving on a highway, you should always:** \n\n    A. Use the left lane for passing slower vehicles.\n    B. Use the right lane for driving at the speed limit.\n    C. Use the center lane for cruising.\n    D. Weave in and out of traffic to get ahead."}],
                },
            ];

            // Display initial practice question
            for (const entry of practiceQuestionHistory) {
                await addMessage(entry.role, entry.parts[0].text);
            }

            document.getElementById("submitButton").addEventListener("click", async () => {
                const userInput = document.getElementById("answer").value.trim();
                if (userInput) {
                    await addMessage("user", userInput);

                    // Send user input to the chat and get AI response
                    const aiResponse = await sendMessage(userInput);
                    await addMessage("model", aiResponse);

                    // Clear input field
                    document.getElementById("answer").value = "";
                }
            });
        }

        runChat();

/* import { GoogleGenerativeAI } from "@google/generative-ai";

      // Fetch your API_KEY
      const API_KEY = "AIzaSyBT4UAwDlLLBg5aC3SKf-hp65PL8r5V21Y";

      // Access your API key (see "Set up your API key" above)
      const genAI = new GoogleGenerativeAI(API_KEY);

      // Array to store conversation history
      let conversationHistory = [];

      async function run() {
          // For text-only input, use the gemini-pro model
          const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro"});

          var input = document.getElementById("answer").value.trim();

          // Add user input to conversation history
          if (input !== "") {
              conversationHistory.push({ question: input });

              const context = conversationHistory.map(entry => entry.question).join("\n");

              const result = await model.generateContent(context); // Use conversation history as context
              const response = await result.response;
              const text = response.text();

              // Store AI's response in conversation history
              conversationHistory.push({ answer: text });

              // Update the content of the response element with the response text
              document.getElementById("response").innerText = text;

              // Clear input field
              document.getElementById("answer").value = "";

              // Scroll to bottom of response
              document.getElementById("response").scrollIntoView({ behavior: 'smooth', block: 'end' });
          }
      }

      document.getElementById("submitButton").addEventListener("click", run);

      // Add event listener for Enter key press
      document.getElementById("answer").addEventListener("keypress", function(event) {
          if (event.key === "Enter") {
              event.preventDefault(); // Prevent form submission
              run(); // Call the run function
          }
      }); */