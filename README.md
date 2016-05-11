# playground

play with Lighttable's internals

Creating your own pluging is challenging enough, but dealing with lack of documentation is still a problem. Moreover if that is accompanied with no tutorials or clear explanations of why things should be done that way.

This plugin is mean to be used as a guideline for developers wanting to implement a plugin for Lighttable.

Currently only the basics are covered, but I will be adding more as I (also) discover hidden parts of Lighttable. I encourage you to do the same and submit a Pull Request so that the world knows about it.

## Usage

Simply install the plugin from the plugin manager. Three commands will be added to your commands panel:
- Playground: playground script
- Playground: Add playground plugin to workspace
- Playground: intro page

The first, opens an introduction to Lighttable internals. You can learn about basic LT architecture and functions. The second is for when you already completed the first one; add the complete playground to the workspace and start playing with each part.

The last one is simply a new intro page that replaces Lighttable's original intro page with a little teaser for developers.

