---
title: Lesson 3. World Objects
contributors: [LoSk-p]
translated: true
---

In the third lesson you will learn how to find World Objects and go to them.

## Requirements

Before this lesson go through [Lesson 0](/docs/spot-lesson0) to setup your connection (if you haven't done it before).

> Don't forget to run Yggdrasil if you use macOS:
> ```bash
> sudo yggdrasil -useconffile /etc/yggdrasil.conf
> ```

## Documentation

Spot has the World Object Service that provides a way to track and store objects detected in the world around Spot. A world object is considered a higher-level item in the scene that has some amount of semantic information associated with it. More information you can find in [Robot Services](https://dev.bostondynamics.com/docs/concepts/robot_services#world-object) tab in documentation.

Using world object service you can find fiducials near the spot. 

> Spot can find objects around faster if he stands.

In the task you will need find fiducials' coordinates and go to them. How to go to the local coordinates you can learn from [Lesson 2](/docs/spot-lesson2.md). The example of how to find fiducial and it's coordinates is in [fiducial_follow example](https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/examples/fiducial_follow/fiducial_follow.py).

1. Firstly, you need to find fiducial object with World Object Service:
```python
fiducial_objects = world_object_client.list_world_objects(
            object_type=[world_object_pb2.WORLD_OBJECT_APRILTAG]).world_objects
```
2. Then get fiducial coordinates in a visual frame:
```python
fiducial = fiducial_objects[0]
vision_tform_fiducial = get_a_tform_b(fiducial.transforms_snapshot, VISION_FRAME_NAME,fiducial.apriltag_properties.frame_name_fiducial.to_proto()
```

## Task

Spot is in the place with some fiducials around. You need detect at least two fiducials and come to each of them within 1 m.


