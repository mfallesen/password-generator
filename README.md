# Password Generator Website.

This as a simple Password generating website that takes User input requests for parameters and builds a randomized password. As prompts and alerts are intrusive they were eliminated in favor of onscreen manipulation through a slider and checkboxes

![Alt Text](/images/pgOnLoad.png)

At least one of the four given checkboxes have to be selected or the application will throw an alert on screen asking the user to choose one of the four given options.

![Alt Text](/images/pgOnError.png)

Once the user has selected their character subset and requested password length they click the button and the application will randomly generate a password from the chosen characters. 

![Alt Text](/images/pgPassGen.png)

It is entirely possible that the password generated does not contain a character from a subset of the chosen characters as the generator is random and does not check to ensure that each generated password has at least one character from each chosen subset. 

See it in action Here: https://mfallesen.github.io/password-generator/.