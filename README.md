# Hoover navigation app with React and Redux

## Introduction

Program that navigates a imaginary robotic hoover (much like a [Roomba](https://en.wikipedia.org/wiki/Roomba)) through an equally imaginary room based on:

* room dimensions as [X and Y coordinates](https://en.wikipedia.org/wiki/Cartesian_coordinate_system), identifying the top right corner of the room rectangle. This room is divided up in a grid based on these dimensions; a room that has dimensions X: 5 and Y: 5 has 5 columns and 5 rows, so 25 possible hoover positions. The bottom left corner is the point of origin for our coordinate system, so as the room contains all coordinates its bottom left corner is defined by X: 0 and Y: 0.
* locations of patches of dirt, also defined by X and Y coordinates identifying the bottom left corner of those grid positions.
* an initial hoover position (X and Y coordinates like patches of dirt)
* driving instructions (as [cardinal directions](https://en.wikipedia.org/wiki/Cardinal_direction) where e.g. N and E mean "go north" and "go east" respectively)

The room is rectangular, has no obstacles (except the room walls), no doors and all locations in the room are clean (hoovering has no effect) except for the locations of the patches of dirt presented in the program input.

Placing the hoover on a patch of dirt ("hoovering") removes the patch of dirt so that patch is then clean for the remainder of the program run. The hoover is always on - there is no need to enable it.

Driving into a wall has no effect (the robot skids in place).

## Goal

The goal of the program is to take the room dimensions, the locations of the dirt patches, the hoover location and the driving instructions as input and to then output the following:

* The final hoover position (X, Y)
* The number of patches of dirt the robot cleaned up

## Input

Program input is a file named `input.txt` and is located in the public directory.
The file contains the following notes:

```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

* the first line holds the room dimensions (X Y), separated by a single space (all coordinates are presented in this format)
* the second line holds the hoover position
* subsequent lines contains the zero or more positions of patches of dirt (one per line)
* the next line then always contains the driving instructions (at least one)

## Output

The output of the program is visualized by an information container and simple animation.

## HOW TO RUN

Instruction:
1. Clone or download the repository from the link: [link](https://github.com/fabijanski/roomba-cleaner-react-redux).
2. Move to the cloned/downloaded folder using the command prompt.
3. Install dependencies using the 'yarn install' command ('npm install').
4. Start the environment using the 'yarn start' command ('npm start').
