---
title: Lesson 0. Connection
contributors: [LoSk-p, vitl2907]
translated: false
---

## Yggdrasil Installation

Install Yggdrasil to your computer

* For Linux installation instructions [here](https://yggdrasil-network.github.io/installation.html)

* For MacOS install .pkg file from this [release 0.3.16](https://github.com/yggdrasil-network/yggdrasil-go/releases/tag/v0.3.16)

## Updating the peers

You need to add a list of peers so that you will be able to connect to Spot. For that, edit the Yggdrasil configuration file with this command:

```bash
sudo nano /etc/yggdrasil.conf
```

In the file that you opened add 5-6 peers geografically near to you. You can find list of available peers [here](https://github.com/yggdrasil-network/public-peers). Example in yggdrasil.conf:

```bash
  Peers:
  [
    tcp://95.79.25.190:50001
    tcp://[2a00:b700:2::6:69]:1333
    tcp://n2o.ddns.net:22632
    tcp://ygg.tomasgl.ru:61933
    tcp://37.139.18.100:59243
    tcp://1.ams.nl.y.fftlt.net:21285
    tcp://1.msk.ru.y.fftlt.net:21285
    tcp://1.tlt.ru.y.fftlt.net:21285
    tcp://ygg.loskiq.com:17313
    tcp://88.201.129.205:8777
    tcp://[2a05:3580:d900:1b13:e2d5:5eff:fed8:8b86]:8777
    tls://88.201.129.205:8778
    tls://[2a05:3580:d900:1b13:e2d5:5eff:fed8:8b86]:8778
    tcp://194.177.21.156:5066
    tcp://46.151.26.194:60575
  ]
  ```
Check if the peers online in [Puplic Peers](https://publicpeers.neilalexander.dev/).

### For Linux:

Then restart Yggdrasil using this command:

```bash
systemctl restart yggdrasil
```
### For macOS:

Unload the service and run Yggdrasil with changed config file:

```bash
sudo launchctl unload /Library/LaunchDaemons/yggdrasil.plist
sudo yggdrasil -useconffile /etc/yggdrasil.conf
```
> You will need to do that before every lesson.

## Check Connection

Check if Yggdrasil works well. For that try to connect to Spot via this link: https://[200:c32a:e1ac:1da2:15ed:626f:c1e0:36ed]:21443. If you see authentication page, you are ready to connect to Spot and do next lessons.

![log_in](../images/spot/less1-login.jpg)

If you don't see this page or you had any errors during the Yggdrasil setup look in [Troubleshooting page](/docs/spot-troubleshooting). If you can't find the solution there, please email spot@robonomics.network.