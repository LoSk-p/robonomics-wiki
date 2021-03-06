---
title: Lesson 1. Robot Services
contributors: [LoSk-p, vitl2907]
translated: true
---

Welcome to the first lesson!
During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot.

[https://youtu.be/qdk7BjWJprc](https://youtu.be/qdk7BjWJprc)

## Requirements

Before this lesson go through [Lesson 0](/docs/spot-lesson0) to setup your connection.

## Connection

To control Spot you need to connect to Spot Core. Go to this link (https://[200:c32a:e1ac:1da2:15ed:626f:c1e0:36ed]:21443) and log in with your username and password (you can do that only with working yggdrasil). 

Then go to `terminal` tab. There you can use python spot-sdk to control Spot.

![terminal](../images/spot/less1-terminal.png)

Also you can see what the robot is doing in real-time livestream (http://[200:b99e:a736:e3bf:744c:6acb:ec11:9dc]:8081/0/stream).

## Documentation

Read [Understanding Spot Programming](https://dev.bostondynamics.com/docs/python/understanding_spot_programming) page in spot-sdk documentation and follow the steps.

For Spot authentication use the same username and password as for Core. Spot address is `192.168.50.3`.

> Use `python3` instead of `python`

> In [Taking ownership of Spot (Leases)](https://dev.bostondynamics.com/docs/python/understanding_spot_programming#taking-ownership-of-spot-leases) section use `lease = lease_client.acquire()` before `lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)`

You can find more detailed information for this lesson in [Base Services](https://dev.bostondynamics.com/docs/concepts/base_services), [Geometry and Frames](https://dev.bostondynamics.com/docs/concepts/geometry_and_frames), [Robot Services](https://dev.bostondynamics.com/docs/concepts/robot_services) and [E-Stop](https://dev.bostondynamics.com/docs/concepts/estop_service) sections of spot-sdk documentation.

## Task

In the first lesson you need to change Spot's body position to make it trace your initials with it's face. For that, you will have to experiment with different body positions. The range of Pitch, Yaw and Roll is from -0.5 to 0.5

## Results

We'll send the rosbag file to your e-mail.
