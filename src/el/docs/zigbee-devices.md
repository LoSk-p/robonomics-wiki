---
title: Συσκευές Zigbee στο Zigbee2MQTT

contributors: [nakata5321, PaTara43]
tools:
  - Zigbee2MQTT 1.40.1
    https://github.com/Koenkk/zigbee2mqtt

---

**Αν, κατά τη διαδικασία εγκατάστασης, εισάγετε ένα συντονιστή ZigBee, μπορείτε να προσθέσετε συσκευές ZigBee στο έξυπνο σπίτι σας. Αυτό το άρθρο θα εξηγήσει πώς να το κάνετε.**

{% roboWikiPicture {src:"docs/home-assistant/zigbee2mqtt.png", alt:"zigbee2mqt"} %}{% endroboWikiPicture %}

## Σύζευξη Συσκευής

Ανοίξτε έναν περιηγητή ιστού και μεταβείτε στη διεύθυνση `http://%PC_IP_ADDRESS%:8099`. Μπορείτε να βρείτε τη διεύθυνση IP του Raspberry Pi
χρησιμοποιώντας την εφαρμογή κινητού [Fing](https://www.fing.com/products) ή το εργαλείο γραμμής εντολών [nmap](https://vitux.com/find-devices-connected-to-your-network-with-nmap/). Αν έχετε ρυθμίσει τα πάντα στον υπολογιστή σας, χρησιμοποιήστε τη διεύθυνση `http://localhost:8099`.

Θα δείτε την ιστοσελίδα του Zigbee2MQTT:


{% roboWikiPicture {src:"docs/home-assistant/z2m-webinterface.jpg", alt:"z2m-webinterface"} %}{% endroboWikiPicture %}


Ήρθε η ώρα να συνδέσετε την έξυπνη συσκευή σας.
Πατήστε πρώτα το κουμπί `Permit join (All)` στην κορυφή της ιστοσελίδας του Zigbee2MQTT.

Στη συνέχεια, ξεκινήστε τη σύζευξη συσκευών. Ο πιο συνηθισμένος τρόπος για να μεταβείτε μια συσκευή σε λειτουργία σύνδεσης είναι να κρατήσετε πατημένο το κουμπί τροφοδοσίας της ή να την ενεργοποιήσετε/απενεργοποιήσετε 5 φορές. Βεβαιωθείτε ότι το Zigbee2MQTT λειτουργεί.

Όταν η συσκευή συνδεθεί, θα τη δείτε στην ιστοσελίδα:

{% roboWikiPicture {src:"docs/home-assistant/device_connected.jpg", alt:"device_connected"} %}{% endroboWikiPicture %}

Τώρα θα πρέπει να δείτε αυτόν τον αισθητήρα στο Home Assistant WebUI. Μεταβείτε σε `Ρυθμίσεις` -> `Συσκευές & Υπηρεσίες` -> `Συσκευές`.

Αφού προσθέσετε όλους τους αισθητήρες, μπορείτε να κλείσετε την ιστοσελίδα του Zigbee2MQTT.