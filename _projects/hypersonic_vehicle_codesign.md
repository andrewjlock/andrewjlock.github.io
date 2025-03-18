---
layout: page
title: Hypersonic Vehicle Co-design
description: Simultanous vehicle and trajectory optimisation 
img: assets/img/project-imgs/waverider.png
importance: 2
category: work
related_publications: true
---

Hypersonic vehicles operate over a wide flight envelope, and their trajectories are often limited by dynamic pressure, thermal, and stability constraints.
Therefore, optimising a vehicle design without consideration of the overall mission objective results in poor designs, or costly iterations between the design and GNC team.

In collaboration with the University of Melbourne and colleagues at the University of Southern Queensland, I led the development of a computational tractable framework for simultanous vehicle and trajectory optimisation.
At its core this was achieved by propagating sensitivities from sub-models into a computational graph, and then combining this graph with automatic differentation tools.
In 2024 we presented results of a hypersonic waverider geometry defined by 30 Bezier curve control points, subject to internal volume, static stability, and dynamic pressure constraints {% cite lock_hypersonic_2025 %} {% cite van_der_heide_multi-mission_2025 %}.
Results show that two very different vehicles are realised for varaying mission objectices; in this case, one a maximum distance objective with obstacles requiring bank maneouvres, and a second minimum time to target objective.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project-imgs/codesign_V1.png" title="sCO2 heat exchanger wind tunnel" class="img-fluid rounded z-depth-1" %}
        Vehicle 1: Maximum range with obstructions
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project-imgs/codesign_V2.png" title="sCO2 heat exchanger wind tunnel" class="img-fluid rounded z-depth-1" %}
        Vehicle 2: Minimum time to target
    </div>
</div>
Vehicle designs optimised for two mission objectives (longest range with obstruction, and shortest time to target)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project-imgs/codesign_obs_xy.png" title="sCO2 heat exchanger wind tunnel" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project-imgs/codesign_obs_xz.png" title="sCO2 heat exchanger wind tunnel" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
Optimal trajectories of both vehicles for the 'Mission 1' objective

<div class="text-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project-imgs/codesign_flowchart.png" title="Codesign Flowchart" class="img-fluid rounded z-depth-1" width=400 %}
    Flowchart of co-design loop
    </div>
</div>


