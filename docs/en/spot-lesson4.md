---
title: Lesson 4. GraphNav service: mapping and navigating on the map
contributors: [LoSk-p, khssnv]
translated: true
---

# Lesson 4. GraphNav service: mapping and navigating on the map

In the fourth lesson you will learn how to record and play autonomous missions with GraphNav service.

## Requirements

Ensure you have Yggdrasil Network software running and configured as described in the [Lesson 0](/docs/spot-lesson0). Otherwise you will not have connection to the robot.

> On macOS you may need to launch Yggdrasil Network in the terminal:
> ```bash
> sudo yggdrasil -useconffile /etc/yggdrasil.conf
> ```

## Theory

The Spot SDK includes APIs, client libraries, and examples that support the development of autonomous navigation behaviors for the Spot robot. Collectively, this service is referred to as GraphNav. Maps are recorded and saved and later can be replayed with any robot in your fleet. During the map recording process, you can assign actions and API callbacks to waypoints along the map route.

Read [GraphNav Tech Summary](https://dev.bostondynamics.com/docs/concepts/autonomy/graphnav_tech_summary) to learn how it works. [Initialisation](https://dev.bostondynamics.com/docs/concepts/autonomy/initialization) is also important part, it will be usefull in this lesson.

> You can view recorded maps with [View Map](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_view_map) example. For that you need to copy the map to your computer:
> ```bash
> scp -r student@strelka.ygg.merklebot.com:<path_to_the_map_on_spot> <path_to_the_map_to_download>
> ``` 
> Also you need [install spot packages](https://github.com/boston-dynamics/spot-sdk/blob/master/docs/python/quickstart.md#install-spot-python-packages).

Study [recording and playing missions](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/graph_nav_command_line) examples in order to use it to record the map and playback the mission recorded.
Use [wasd](https://github.com/boston-dynamics/spot-sdk/tree/master/python/examples/wasd) example to move robot while recording the map.
This lesson you can solve the challenge without writing your own script.

## The challenge

You need to record a map avoiding obstacles and make spot go from start point to end point. Save your mission in `/home/student/result`.
