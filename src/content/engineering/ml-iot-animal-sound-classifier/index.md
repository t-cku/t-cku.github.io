---
title: "ML IoT Animal Sound Classifier"
date: 2025-11-01
summary: "A system that listens for animal sounds and classifies them in real time across connected devices."
tags: ["Python", "scikit-learn", "Librosa", "MQTT", "Flask", "Coursework project"]
featured: false
draft: false
---

The system runs across three nodes connected over MQTT:

- **Node 1 (capture and classification):** a laptop records audio clips of animal sounds, extracts features with Librosa and classifies each clip using an SVM. We also tried a random forest, but the SVM performed better on our small dataset.
- **Node 2 (broker):** a HiveMQ MQTT broker relays the results between devices.
- **Node 3 (dashboard):** a Flask server displays each predicted sound alongside whether it matched the true animal, and tracks the running accuracy as new clips arrive.
