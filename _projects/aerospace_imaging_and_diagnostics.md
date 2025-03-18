---
layout: page
title: Aerospace Imaging and Diagnostics
description: Calibrated optical measurements for aerospace operations and research 
img: assets/img/project-imgs/varda_cap.jpg
importance: 1
category: work
related_publications:
---

I design and implement portable precision tracking hardware, star-tracking software, and state estimation algorithms to analyse spacecraft re-entry, vehicle launches, and atmospheric break-up debris. 

I've worked alongside leading aerospace organisations from around the world on their cmpaigns, including:
- **OSIRIS-REx capsule re-entry** (2023, NASA)
- **NG-20 ISS resupply capsule re-entry** (2024, Northrop Grumman and University of Kentucky)
- **Bolt-1b experimental hypersonic rocket launch** (2024, John Hopkins Applied Physics Laboratory)
- **Varda W-2 capsule re-entry** (2025, Southern Launch)

Ground imaging stations can be preciesly calibrated at night by star tracking alogorithms, but achieving precision greater than about 10 arcminutes in daylight, or from aircraft is challenging. Therefore, a lot my focus is diected at algorithms and novel Kalman filters with bias correction to produce accurate reconstrctions from imprecise data.

<div class="text-center">
{% include video.liquid path="assets/video/orex_animation_compressed.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true width=500 %}
</div>
<div class="caption">
Example of combining mutliple measurements with bias and random error into bespoke state esimation algorithms to provide accurate trajectory reconstruction for hypersonic flight analysis and operational insights.
</div>

<!--<div class="caption">-->
<!--</div>-->

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project-imgs/varda_w2.jpg" title="Ground site for Varda W-2 diagnostics" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project-imgs/NG20.jpg" title="NG-20 airborne imaging and diagnostics" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (L) - Ground site for the Varda W-2 observaiton, in collaboration with Southern Launch. (R) - Airborne imaging and diagnostics of NG-20 ISS re-supply spacecraft re-entry and breakup. 
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project-imgs/bolt_1.jpg" title="Bolt ground observation station" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project-imgs/bolt_2.jpg" title="Bolt launch" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Imaging and launch trajectory and attitude reconstruction for Bolt-1b hypersonic experimental sounding rocket launch.
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project-imgs/orex_team.jpg" title="Orex team" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The entire OSIRIS-Rex re-entry observation team, including NASA SCIFLI,
    JAXA, the University of Southern Queensland, and some other distinguished
    researchers and guests. 
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project-imgs/orex_jet.jpg" title="UniSQ team" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project-imgs/orex_me.jpg" title="Me" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    (L) - The UniSQ team for the OSIRIS-REx observation. (R) - Me at the measurement station, 4:30am, on the day of re-entry.
</div>
