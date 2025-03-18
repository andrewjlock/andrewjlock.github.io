---
layout: page
title: Optical tracking in hypersonic wind tunnels
description: An efficient way to measure hypersonic aerodynamics
img: assets/img/project-imgs/cube_shock1.png
importance: 1
category: work
related_publications: true
---

I developed an algorithm to use two independent cameras (at different
frame rates) to extract aerodynamics from free-flight models in the UniSQ TUSQ
hypersonic wind tunnel.

All image processing and analysis is performed in open-source code, making use
of `open-cv` image processing functions. The primary challenge with this project
is reducing the measurement noise which gets amplified when the position and
orientation of the body is differentiated twice to extract forces and moments.
To resolve this, I use a custom-written Unscented (Sigma point) Kalman filter
and Bayesian smoother for state estimation, which provide smooth second
kinematic derivatives. 

See some of our videos below, and check out the publications {% cite lock_aerodynamic_2024 %} {% cite lock_optical_2023 %}

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/run_2.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    <!-- </div> -->
    <!-- <div class="col-sm mt-3 mt-md-0"> -->
        <!-- {% include video.liquid path="assets/video/pexels-engin-akyurt-6069112-960x540-30fps.mp4" class="img-fluid rounded z-depth-1" controls=true %} -->
    <!-- </div> -->
<!-- </div> -->
<div class="caption">
    A 30mm cube dropped from near-stationary in Mach 6 flow. Video duration is
    approx 30 ms in real-time. Tracking result (white frame), expected marker
    locations (green and blue circles) and image-detected markers (red circles)
    overlaid.
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/run_4.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true %}
    <!-- </div> -->
    <!-- <div class="col-sm mt-3 mt-md-0"> -->
        <!-- {% include video.liquid path="assets/video/pexels-engin-akyurt-6069112-960x540-30fps.mp4" class="img-fluid rounded z-depth-1" controls=true %} -->
    <!-- </div> -->
<!-- </div> -->
<div class="caption">
    A 30mm cube dropped with approximately 600 RPM rotation in Mach 6 flow. Video duration is
    approx 30 ms in real-time. Tracking result (white frame), expected marker
    locations (green and blue circles) and image-detected markers (red circles)
    overlaid.

</div>
