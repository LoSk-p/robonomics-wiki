---
title: Lesson 1. Emergency stop, initialization, body position control
contributors: [LoSk-p, vitl2907, khssnv]
translated: true
---

# Lesson 1. Emergency stop, initialization, body position control

Welcome to the first lesson!

During this lesson you will learn how to authorize yourself as a user, get motor power control and send basic commands to Spot.

Watch our introductory video if you haven't seen it already: [The First Lesson with Spot SDK](https://youtu.be/qdk7BjWJprc).

## Requirements

Ensure you have Yggdrasil Network software running and configured as described in the [Lesson 0](/docs/spot-lesson0). Otherwise you will not have connection to the robot.

> On macOS you may need to launch Yggdrasil Network in the terminal:
> ```bash
> sudo yggdrasil -useconffile /etc/yggdrasil.conf
> ```

## Connection

To control Spot you need to connect to SpotCORE computer. You can do that using SSH, in the terminal:

```bash
ssh student@strelka.ygg.merklebot.com
```

## Theory

Read [Understanding Spot Programming](https://dev.bostondynamics.com/docs/python/understanding_spot_programming) page in spot-sdk documentation and follow the steps.

You can find more detailed information for this lesson in [Base Services](https://dev.bostondynamics.com/docs/concepts/base_services), [Geometry and Frames](https://dev.bostondynamics.com/docs/concepts/geometry_and_frames), [Robot Services](https://dev.bostondynamics.com/docs/concepts/robot_services) and [E-Stop](https://dev.bostondynamics.com/docs/concepts/estop_service) sections of spot-sdk documentation.

## Practice

1. Connect to SpotCORE by SSH from the terminal,

```console
ssh student@strelka.ygg.merklebot.com
```

2. Create a script can authenticate in Spot, acquire control (lease) and power on the robot.

We create [e-stop endpoint](https://dev.bostondynamics.com/python/examples/estop/readme) for you, so you should not create it.
For Spot authentication use username and password from `/home/student/credentials` file. Spot address is `192.168.50.3`.

> In [Taking ownership of Spot (Leases)](https://dev.bostondynamics.com/docs/python/understanding_spot_programming#taking-ownership-of-spot-leases) section use `lease = lease_client.acquire()` before `lease_keep_alive = bosdyn.client.lease.LeaseKeepAlive(lease_client)`

3. Try your script with stand-up and sit-down commands. Ensure robot moves as expected,

4. Add body position control to your script. Experiment with `bosdyn.geometry.EulerZXY` robot command argument builder in order to identify what yaw, roll and pitch parameters you need to set to solve the challenge. The range of Pitch, Yaw and Roll is from -0.5 to 0.5.

> Make sure you run your script by Python 3 with `python3` command. Command `python` refers to an obsolete Python 2 interpreter.

## The challenge

In the first lesson you need to change Spot's body position to make it stand-up, trace your initials with it's face and then sit-down.
