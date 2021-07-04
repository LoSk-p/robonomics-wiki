---
title: Lesson 2. Robot Command Service
contributors: [LoSk-p]
translated: false
---

In the second lesson you will learn how to use Spot Command services and walk with Spot.

## Requirements

Before this lesson go through [Lesson 0](/docs/spot-lesson0) to setup your connection.

> Don't forget to run Yggdrasil if you use macOS:
> ```bash
> sudo yggdrasil -useconffile /etc/yggdrasil.conf
> ```

## Documentation

To control Spot with `Robot Command Service` you firstly need to build command. Spot SDK has RobotCommandBuilder class for it. Full list of methods and its descriprions you can find [here](https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/bosdyn-client/src/bosdyn/client/robot_command.py#L593). 

In this lesson you may need to use:

* Stand Command
```python
def stand_command(params=None, body_height=0.0, footprint_R_body=geometry.EulerZXY())
```

* Go to point

```python
def synchro_se2_trajectory_point_command(goal_x, goal_y, goal_heading,      
                                    frame_name, params=None,
                                    body_height=0.0,
                                    locomotion_hint=spot_command_pb2.HINT_AUTO,
                                    build_on_command=None)
```
The example of use [here](https://github.com/boston-dynamics/spot-sdk/blob/master/python/examples/frame_trajectory_command/frame_trajectory_command.py).

* Velocity Command

```python
def velocity_command(v_x, v_y, v_rot, params=None, body_height=0.0,
                         locomotion_hint=spot_command_pb2.HINT_AUTO, 
                         frame_name=BODY_FRAME_NAME)
```
Example of building and running velocity command:

```python
from bosdyn.client.robot_command import RobotCommandClient, RobotCommandBuilder
import time

command_client = robot.ensure_client(RobotCommandClient.default_service_name)
cmd = RobotCommandBuilder.velocity_command(0.5, 0, 0.5)
command_client.robot_command(robot_cmd, end_time_secs=time.time() + 2)
```

## Task

You will have a list of points with their local coordinates and you need make Spot to go through theese points.
