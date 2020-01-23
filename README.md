# Employee-Template-Generator
## The Web Developer Team Profile Generator

## Purpose
The purpose of the generator is to create a sheet that presents information about the dev team at a glance. Information such as their name, ID, email address, and title are all displayed, as well as an icon that denotes their role. 

As well, the Manager has their office number listed, the Engineer has their github profile listed, and the Intern has their school listed.

## User Story
AS A manager...
I WANT to generate a page that displays my team's information...
SO THAT I have quick access to their emails and Github profiles.

## How it works
When the app is run, the user is presented with a prompt to determine the size of the team.
![example profile](./Develop/input.png "Example Profile")

Then, for every member of the team, the user inputs the relevant information. These team members are added to an array that is used to dynamically generate cards on the webpage with their relevant information.
![example profile](./Develop/devprofile.png "Example Profile")

