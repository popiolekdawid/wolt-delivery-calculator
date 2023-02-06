# Delivery Fee Calculator

This is my solution to the assignment for the Software Engineering Intern Position at Wolt.

**You can use the live version at:** https://popiolekdawid.github.io/wolt-delivery-calculator/


## What I used:

For this app I used TypeScript and React. No extra dependencies. For individual components index files I used JavaScript as there was no need for the type system.


## Component tree:

App -> Calculator -> OutputBox <br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;->DeliveryForm -> InputField


## How it works:

The algorithm is in the OutputBox component and it calculates the fee everytime the submit button in the DeliveryForm is pressed.
I set restrictions on the inputs: no negative values in the number inputs and the earliest date you can input is the current one.

## Styling

I used vanilla CSS because the app doesn't require elaborate styling. For ease of maintnance and readability I gave every component a separate CSS file in it's component directory.

## How the app looks:

![image](https://user-images.githubusercontent.com/112573508/217039908-f26d20be-9c4d-4bd6-8586-3ad2d4e463ea.png)
