---
title: Lesson 5. Spot service and maintenance
contributors: [LoSk-p]
translated: true
---

In this lesson you will learn what should you do if you just got the robot: the first run and network setup. Also you will learn how to run the calibration process that should be run monthly.

This lesson is more theoretical than others, practical part will take about 30 minutes.

## First Run

Look at [Startup Procedure](https://support.bostondynamics.com/s/article/Startup-Procedure) page in Documentation.

## Networking

Spot offers a variety of networking options to support a diverse set of applications and environments. Options include:

* Spot as a connected peer. Physicall connection to Spot.

* Spot as a WiFi access point. 

* Spot as a WiFi client. Spot can join an existing WiFi network, and applications can also join the same WiFi network to talk to Spot.

For more information look at [Networking page](https://dev.bostondynamics.com/docs/concepts/networking).

Spot Core is connected to the Spot via payload port. Spot Core can be connected to the Internet with Wi-Fi dongle. The setup instructions you can find at [Spot Core Cockpit](https://dev.bostondynamics.com/docs/payload/spot_core_cockpit.html?highlight=spot%20check) page.

## Calibration

Spot Check is a full calibration of the robot. Also you can run the camera calibration 

* [run_spot_check](https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L164). Run full spot check routine. The robot should be sitting on flat ground when this routine is started. This routine calibrates robot joints and checks camera health.

* [run_camera_calibration](https://github.com/boston-dynamics/spot-sdk/blob/master/python/bosdyn-client/src/bosdyn/client/spot_check.py#L204). Run full camera calibration routine for robot. This function blocks until calibration has completed. This function should be called once the robot is powered on and standing in the configuration described in user documentation.

## Task

Run spot check and safe the result of the calibration in a `/home/student/result` directory as a text file.