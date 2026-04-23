export const articles = [
  {
    slug:     'psychrometric-chart-guide',
    title:    'Understanding the Psychrometric Chart: A Practical Guide for HVAC Engineers',
    category: 'Psychrometrics',
    read:     '8 min read',
    date:     'April 2026',
    intro:    'The psychrometric chart is not a relic — it is a fingerprint. Every process your system performs leaves an exact, traceable mark on it. Here is how working engineers actually use it.',
    content: `
<p>Most engineers first encounter the psychrometric chart squeezed between refrigeration cycles and fluid mechanics in third year. It gets memorised for the exam and then, for many, quietly filed away. That is a shame. Because for the practicing HVAC engineer — the one who has to make sense of a coil that isn't hitting its design leaving conditions, or explain to a client why their "standard" office air feels like a tropical greenhouse in winter — the psychrometric chart is not a relic. It is a fingerprint. Every process your system performs leaves an exact, traceable mark on it.</p>
<p>This guide will not re-explain dry-bulb and wet-bulb temperature as if you have never heard the terms. What it will do is show you how working engineers actually read and use the chart — not as a lookup tool, but as a diagnostic instrument, a design validation tool, and occasionally, an argument settler.</p>

<h2>What the Chart Is Really Telling You</h2>
<p>The psychrometric chart is a state diagram for moist air at a fixed atmospheric pressure. Every possible combination of dry-bulb temperature and moisture content — every possible <em>condition</em> of air — corresponds to a single point on the chart. The boundary on the left, that sweeping upward curve, is the saturation line. It represents air holding the maximum possible moisture at any given temperature. Everything to the right of it is physical impossibility at standard pressure.</p>
<p>The horizontal axis is dry-bulb temperature. The vertical axis (right side) is humidity ratio in grams of water vapour per kilogram of dry air. The curved lines sweeping across the chart are lines of constant relative humidity. The diagonal lines slanting from upper-left to lower-right represent equal values of wet-bulb temperature or, nearly equivalently, equal enthalpy.</p>
<p>Now here is the part that most textbooks underemphasise: the lines of constant enthalpy and constant wet-bulb temperature are not the same lines, though they are close enough that on older hand-drawn charts they were often merged. The deviation — called the <strong>Sprung psychrometric correction</strong> — matters when you are doing precise energy calculations at extreme conditions. It rarely matters during initial design, but it will matter in your software, and it matters in commissioning if you are using dry/wet-bulb readings to infer enthalpy.</p>

<h3>The Three Numbers That Fully Define Any Air State</h3>
<p>Given standard atmospheric pressure, any <em>two</em> independent psychrometric properties fully define the state of air. In practice, this means that if you can measure dry-bulb and wet-bulb temperature on site, you can derive <em>everything</em> — humidity ratio, relative humidity, dew point, specific enthalpy, specific volume. This is not just a mathematical convenience. It is the reason that the humble sling psychrometer, a device with two thermometers and a wet wick, was the primary commissioning tool in HVAC for most of the twentieth century.</p>

<table>
  <thead>
    <tr><th>Property</th><th>Symbol</th><th>Units</th><th>Typical Comfort Range</th></tr>
  </thead>
  <tbody>
    <tr><td>Dry-Bulb Temperature</td><td>T<sub>db</sub></td><td>°C</td><td>21 – 26°C</td></tr>
    <tr><td>Wet-Bulb Temperature</td><td>T<sub>wb</sub></td><td>°C</td><td>14 – 20°C</td></tr>
    <tr><td>Dew Point Temperature</td><td>T<sub>dp</sub></td><td>°C</td><td>10 – 15°C</td></tr>
    <tr><td>Relative Humidity</td><td>φ</td><td>%</td><td>40 – 60%</td></tr>
    <tr><td>Humidity Ratio</td><td>W</td><td>g/kg</td><td>7.5 – 11.5 g/kg</td></tr>
    <tr><td>Specific Enthalpy</td><td>h</td><td>kJ/kg</td><td>43 – 58 kJ/kg</td></tr>
  </tbody>
</table>

<h2>Reading a Process on the Chart</h2>
<p>The power of the psychrometric chart lies in how it makes HVAC processes visual. When your air-handling unit draws in outside air, conditions that air, and delivers it to the space, every stage of that conditioning is a movement on the chart. The direction of movement tells you what kind of process is occurring.</p>
<p>Horizontal movement to the left — decreasing dry-bulb with no change in humidity ratio — is sensible cooling. It happens when air passes over a cool surface that stays above the dew point of the air, so no condensation occurs. Horizontal movement to the right is sensible heating. Vertical movement upward — increasing humidity ratio at constant dry-bulb — is adiabatic humidification. Movement downward is dehumidification, which always involves condensation, and which therefore cannot happen without the air temperature first reaching its dew point.</p>
<p>Mechanical cooling with dehumidification — what a direct-expansion or chilled water coil does — is a diagonal movement toward the lower-left. The air is cooled, it reaches its dew point, moisture condenses on the coil surface, and the leaving air is both cooler and drier. The slope of that process line is determined by the <strong>sensible heat ratio</strong> of the coil — the fraction of total heat removal that is sensible rather than latent.</p>

<blockquote>The process line from supply to return air — that diagonal across the chart — has a slope that encodes everything about how your space loads are balanced. If the slope is wrong, the comfort is wrong, and no amount of thermostat adjustment will fix it.</blockquote>

<h2>The Apparatus Dew Point and Bypass Factor</h2>
<p>Here is a concept that gets glossed over in most introductory treatments but is critical to anyone actually selecting or troubleshooting a cooling coil. When air passes through a cooling coil, not all of it makes full contact with the coil surface. Some fraction of the airflow essentially bypasses the active heat exchange — it passes through the gaps between fins without reaching coil temperature. This fraction is called the <strong>bypass factor (BF)</strong>.</p>
<p>The temperature the coil <em>would</em> bring air to if the bypass factor were zero — if all the air actually touched the coil surface — is called the <strong>apparatus dew point (ADP)</strong>. On the psychrometric chart, the ADP sits on the saturation curve. If you extend the process line from entering to leaving air conditions, it intersects the saturation curve at the ADP. This is not a coincidence; it is the geometric definition of the relationship.</p>
<p>A coil with a high bypass factor (say, 0.20) has a process line that terminates relatively far from the ADP — the leaving air is not as cool or dry as the ADP would suggest. A coil with a lower bypass factor terminates closer to the ADP. When a coil is underperforming in the field, one of the first things to check is whether the actual bypass factor matches the design assumption.</p>

<h2>A Worked Example: Sizing a Cooling Coil Process</h2>
<p>Consider an office in Johannesburg. The design outside air conditions on a summer peak day are 33°C dry-bulb and 17°C wet-bulb — a humidity ratio of roughly 7.8 g/kg and specific enthalpy around 53 kJ/kg. The return air from the occupied space sits at 24°C dry-bulb, 50% RH — approximately 9.3 g/kg and 47.8 kJ/kg.</p>
<p>Mixed air entering the AHU (assuming 30% outside air by mass) will be somewhere between these two points on the chart — around 27.3°C dry-bulb and 8.8 g/kg. The cooling coil must bring this down to a supply condition of roughly 13°C dry-bulb at 95% RH to satisfy the space sensible and latent loads.</p>
<p>The total cooling duty of the coil is the enthalpy difference between entering and leaving air, multiplied by the mass flow rate of air. If you have sized this correctly on the chart, the slope of your process line will pass through an ADP of approximately 7–8°C, and the bypass factor will be consistent with the coil row count and face velocity in your equipment schedule.</p>

<div class="callout">
  <div class="callout-label">Engineering Note</div>
  <p>The Johannesburg high-altitude correction matters here. At an elevation of 1,753 m, atmospheric pressure is approximately 82.5 kPa — about 18% lower than sea level. All psychrometric calculations require pressure-corrected charts or software. Using standard sea-level charts for Johannesburg will understate humidity ratios by a measurable margin.</p>
</div>

<h2>The Comfort Zone Is Smaller Than You Think</h2>
<p>ASHRAE 55 defines a comfort zone that looks generous on a psychrometric chart — a polygon roughly bounded by 20–27°C dry-bulb and 30–60% relative humidity, with upper humidity limits driven more by dew point temperature than by a fixed RH percentage. But in practice, human thermal comfort is far more sensitive to small deviations than the polygon implies, because the boundaries assume a specific activity level, metabolic rate, clothing insulation, and mean radiant temperature.</p>
<p>The result is that a space that appears to be perfectly within the ASHRAE comfort zone on paper can still produce occupant complaints — usually when the radiant environment is asymmetric, when drafts exist, or when vertical temperature stratification is excessive. The psychrometric chart does not capture these effects. It describes the thermodynamic state of the air at a point.</p>
<p>This is not a criticism of the chart. It is a reminder that no single tool tells the whole story, and an engineer who is fixated on hitting a supply condition on the chart while ignoring air distribution, diffuser selection, and room geometry will still produce an uncomfortable space.</p>

<h2>Using the Chart as a Diagnostic Tool</h2>
<p>Where the psychrometric chart becomes genuinely powerful is in commissioning and troubleshooting. If you measure entering and leaving air conditions across every component in an AHU — with a calibrated digital psychrometer — you can plot each process on the chart and immediately see where the system is deviating from design.</p>
<p>A cooling coil with a leaving humidity ratio significantly <em>higher</em> than design, but leaving dry-bulb close to correct, suggests the coil is operating at a higher bypass factor than assumed — possibly due to fouling, a face velocity error, or a row count discrepancy. A coil where both leaving temperature and leaving humidity ratio are higher than design, but the process line slope is correct, suggests the coil is undersized or the entering conditions are worse than design assumptions. These diagnoses are visible in seconds on the chart.</p>
<p>The psychrometric chart has survived the transition from slide rules to software not because engineers are sentimental, but because it compresses enormous thermodynamic complexity into a single, spatially intuitive diagram. Learn to read it fluently — not as a lookup table, but as a map of where your system is and where it should be.</p>
    `,
  },

  {
    slug:     'bsl3-pressure-cascade',
    title:    'Pressure Cascade Design in BSL-3 Containment Laboratories',
    category: 'BSL Design',
    read:     '12 min read',
    date:     'April 2026',
    intro:    'Pressure cascade design is the mechanism by which directed airflow becomes the primary physical barrier against aerosol transmission. Here is what the guidelines say — and what they leave out.',
    content: `
<p>In 1992, a researcher at a university containment facility in the United States contracted tuberculosis. The investigation that followed found that the laboratory's HVAC system, which had been designed for BSL-3 containment, had been operating with a supply/exhaust imbalance that was intermittently reversing the pressure differential across the anteroom. The room was "BSL-3" on paper. The air was not flowing the right direction. TB is an aerosol-transmitted pathogen. The rest follows logically.</p>
<p>Pressure cascade design is not a bureaucratic exercise in meeting guidelines. It is the mechanism by which directed airflow becomes the primary physical barrier against aerosol transmission from a containment zone to occupied, uncontrolled space. Every other containment measure — the HEPA-filtered biosafety cabinet, the sealed penetrations, the autoclaved waste — is supplementary to this fundamental principle: air must always flow from zones of lower biological risk toward zones of higher biological risk, and it must never flow in reverse.</p>

<h2>The Philosophy of Directed Airflow</h2>
<p>The pressure cascade works on a simple mechanical principle. If a room is maintained at a lower absolute pressure than the room adjacent to it, and if there is any opening between them — even a crack under a door — air will flow from the higher-pressure room into the lower-pressure room. The direction of airflow is determined by the pressure differential, not by the intent of the person opening the door.</p>
<p>In a properly designed BSL-3 facility, the chain of pressure zones looks like this: the building corridor is at atmospheric reference (0 Pa by convention). The change room or clean corridor sits at −15 Pa. The anteroom or airlock sits at −30 Pa. The main containment laboratory sits at −50 Pa. At each transition, air moves inward — from the corridor toward the laboratory — regardless of what happens at the door.</p>
<p>This is the theory. The engineering challenge is maintaining that pressure differential under all foreseeable operating conditions — varying occupancy, door openings, thermal gradients, equipment operation, and HVAC component failures — with sufficient reliability that the probability of a reversal event can be considered negligible for the risk classification of the pathogens handled.</p>

<h2>Pressure Differentials: What the Guidelines Say</h2>
<p>Multiple regulatory and guidance frameworks specify minimum pressure differentials for BSL-3 containment. They do not all agree, and the differences matter.</p>

<table>
  <thead>
    <tr><th>Zone Boundary</th><th>CDC/NIH (BMBL 6th Ed.)</th><th>WHO Lab Biosafety Manual</th><th>EN 12128 / CEN</th></tr>
  </thead>
  <tbody>
    <tr><td>Corridor → Change/Clean area</td><td>≥ −12.5 Pa</td><td>−15 Pa recommended</td><td>−15 Pa min.</td></tr>
    <tr><td>Change area → Anteroom</td><td>≥ −12.5 Pa step</td><td>−15 Pa step</td><td>−15 Pa step</td></tr>
    <tr><td>Anteroom → Main Lab</td><td>≥ −12.5 Pa step</td><td>−20 Pa step</td><td>−20 Pa step</td></tr>
    <tr><td>Lab (absolute, ref. corridor)</td><td>≥ −37.5 Pa</td><td>−50 Pa recommended</td><td>−50 Pa min.</td></tr>
  </tbody>
</table>

<p>The CDC/NIH BMBL minimum of −37.5 Pa total is a lower bound, not a design target. Most modern BSL-3 facilities, particularly those designed for respiratory pathogen work, target −50 Pa at the main laboratory relative to the building corridor. Projects with TB mandate this. Projects with higher-consequence pathogens may go to −75 Pa.</p>

<blockquote>The minimum pressure differential in the guideline is what the regulator will accept. The design pressure differential is what the engineer believes is necessary to maintain containment when a technician holds a door open while carrying a rack of centrifuge tubes.</blockquote>

<h2>Single-Pass Exhaust: Non-Negotiable</h2>
<p>BSL-3 laboratories operate on 100% outside air — no recirculation. This is not primarily about maintaining pressure differentials; it is about ensuring that exhaust air from the containment zone never re-enters occupied space. All exhaust air from the BSL-3 main laboratory must pass through at least one HEPA filter (H14 grade, ≥99.995% efficiency at MPPS) before discharge to atmosphere.</p>
<p>The consequence of this design requirement is a substantial mechanical plant. A 100 m² BSL-3 laboratory at a minimum of 12 air changes per hour requires roughly 4,000–4,800 m³/h of supply and an equal or greater volume of exhaust. Design practice typically sets the exhaust volume 10–15% above supply to ensure the laboratory operates at net negative pressure.</p>

<h3>The Imbalance That Matters</h3>
<p>The directional flow in a pressure cascade is established and maintained by a continuous volumetric imbalance between supply and exhaust in each zone. The containment zone exhausts more air than it receives. The excess must come from adjacent zones — which means air is continuously drawn inward through any available gap.</p>
<p>When the imbalance disappears — when supply and exhaust volumes equalise — there is no longer a reliable mechanism to prevent outward migration of contaminated air. This can happen through a supply fan failure, duct leakage, or when a commissioning engineer sets damper positions for design flow conditions and the system drifts over months of operation without being re-verified.</p>

<h2>The Challenge of Door Opening</h2>
<p>Every time a door in the cascade is opened, the pressure differential across that door temporarily collapses. The differential between the anteroom and the main laboratory — the most critical boundary in the cascade — is typically in the range of −20 Pa. At that differential, the airflow through a partially open doorway is directional and relatively robust. But at the moment of door opening, the two volumes equalise briefly, and the direction of airflow across the threshold is determined by turbulence and convective currents, not by the mechanical cascade.</p>
<p>This is why interlocked doors — a double-door airlock arrangement where only one door can be open at a time — are the standard detail for the anteroom/laboratory boundary in BSL-3. The interlock prevents the scenario where both doors are open simultaneously and a direct, unobstructed flow path exists from the laboratory to the corridor.</p>

<div class="callout callout-danger">
  <div class="callout-label">Critical Design Requirement</div>
  <p>Interlocked doors are not simply a best practice — they are required by WHO Laboratory Biosafety Manual (4th edition) and most national biosafety codes for BSL-3 TB laboratories. The interlock logic must be implemented in the BMS with hardwired failsafe: the default state on power loss should be doors locked closed, not open.</p>
</div>

<h2>BMS Integration and Alarm Philosophy</h2>
<p>A BSL-3 pressure cascade cannot be maintained without continuous monitoring. Real monitoring requires pressure differential transmitters across each zone boundary, with readings logged at the BMS and alarm setpoints configured for both high and low deviations from design.</p>
<p>For alarm setpoints, common practice on well-designed projects sets a warning alarm at 75% of design differential (i.e., −37.5 Pa warning when design is −50 Pa) and a critical alarm at 50% of design differential (−25 Pa critical). This provides an early warning that the system is drifting before the differential drops to a containment-compromising level, giving maintenance staff time to investigate and correct before the critical threshold is reached.</p>

<h2>Stack Effect and Thermal Gradients</h2>
<p>Every mechanical engineer designing a BSL-3 facility in a multi-storey building needs to reckon with stack effect. In a tall building in cold weather, the buoyancy difference between warm interior air and cold exterior air creates a substantial vertical pressure gradient — pressure at the top of the building is lower than at the bottom. These pressures, which can reach ±20–40 Pa in a tall building in a cold climate, are superimposed on the deliberately engineered cascade pressures.</p>
<p>A laboratory on an upper floor in winter may find its pressure differential partially cancelled by the stack effect. Variable volume exhaust with BMS-controlled pressure-independent dampers on each zone boundary is the standard solution for facilities where stack effect variation is significant.</p>

<h2>Commissioning and Ongoing Verification</h2>
<p>Pressure cascade design is not complete at the end of mechanical commissioning. It requires ongoing verification — typically through an annual biorisk management review that includes a witnessed pressure differential test under operating conditions, door interlock functional test, HEPA filter integrity test, and a review of BMS alarm logs from the preceding twelve months.</p>
<p>The most difficult thing to convey to clients who are funding a BSL-3 facility is that the ongoing verification programme is not a regulatory formality. It is the mechanism by which the assumption that the facility is safe is either confirmed or challenged. A BSL-3 facility that has not been properly commissioned, or that operates without ongoing pressure verification, is not a BSL-3 facility in any meaningful sense. It is a room with a sticker on the door.</p>
    `,
  },

  {
    slug:     'cooling-coil-selection',
    title:    'Cooling Coil Selection: How to Read and Verify Manufacturer Data',
    category: 'System Design',
    read:     '6 min read',
    date:     'April 2026',
    intro:    'The manufacturer\'s data is accurate. The problem is with how engineers use it — particularly when entering conditions deviate from the table, and when the project is not at sea level.',
    content: `
<p>Every cooling coil manufacturer provides performance data in the same basic format: a table of total capacity, sensible capacity, and leaving conditions against a matrix of entering air temperature, entering water temperature, water flow rate, and face velocity. This data was generated in a test chamber under controlled conditions, certified to ARI/AHRI 410, and it is accurate within the stated tolerances. The problem is not with the data. The problem is with how engineers use it.</p>
<p>The manufacturer's data tells you what the coil will do at exactly the specified entering conditions. On a real project, the entering conditions will not match the table. Knowing how to navigate these deviations — how to interpolate intelligently, and how to verify that your selected coil conditions are physically consistent — is what separates a coil that performs from one that becomes a commissioning headache.</p>

<h2>The Three Verification Checks</h2>
<p>Before any cooling coil selection is finalised, three independent checks should be run. If they all agree, the selection is valid. If any one of them conflicts with the others, you have a problem with either the selection or the entering conditions.</p>

<h3>Check 1: Energy Balance</h3>
<p>The total cooling duty of the coil must equal the product of the air mass flow rate and the enthalpy difference between entering and leaving air conditions:</p>
<p class="equation">Q<sub>total</sub> = ṁ<sub>air</sub> × (h<sub>entering</sub> − h<sub>leaving</sub>)</p>
<p>This seems obvious, but it is violated surprisingly often when engineers carry conditions from different sources — entering conditions from the psychrometric chart, leaving conditions from the manufacturer table, and air mass flow from a separate calculation — without checking that the three numbers are consistent with each other.</p>

<h3>Check 2: Sensible Heat Ratio Consistency</h3>
<p>The manufacturer will report a sensible heat ratio (SHR) for the coil at the stated conditions. This is the fraction of total cooling that is sensible rather than latent:</p>
<p class="equation">SHR = Q<sub>sensible</sub> / Q<sub>total</sub></p>
<p>On the psychrometric chart, draw the process line from entering to leaving conditions. Now extend it to the saturation curve. If the extended line intersects the saturation curve at a temperature that makes physical sense for your chilled water entering temperature — typically a few degrees above the CHW supply temperature for a conventional selection — then the SHR is consistent with the coil geometry. If the line intersects the saturation curve at a temperature below your CHW supply temperature, you have an impossible selection. The apparatus dew point cannot be colder than the coolant.</p>

<h3>Check 3: Bypass Factor Plausibility</h3>
<p>The bypass factor (BF) can be calculated directly from the entering and leaving conditions and the ADP:</p>
<p class="equation">BF = (T<sub>leaving</sub> − T<sub>ADP</sub>) / (T<sub>entering</sub> − T<sub>ADP</sub>)</p>
<p>For a well-designed chilled water coil at standard face velocities (1.5 – 3.0 m/s), typical bypass factors fall in the range of 0.05 to 0.20. A 4-row coil at 2.5 m/s might have a BF of 0.15–0.18. A 6-row coil at the same velocity might achieve 0.08–0.12. If your calculated BF is outside this range, investigate before you schedule the coil.</p>

<blockquote>A bypass factor calculated from manufacturer data that falls outside 0.05–0.20 is not an interesting result — it is a red flag. Investigate before you schedule the coil.</blockquote>

<h2>The Face Velocity Problem</h2>
<p>Face velocity is probably the most frequently misapplied parameter in coil selection. The manufacturer data is based on a specific face velocity, and changing it affects everything: sensible capacity, total capacity, SHR, bypass factor, and air-side pressure drop.</p>
<p>For chilled water coils in central plant applications, face velocities between 2.0 and 2.5 m/s are generally optimal — low enough to avoid moisture carryover from the coil surface, high enough to maintain effective heat transfer across all rows. Coils operating above 3.0 m/s risk condensate entrainment into the ductwork downstream, which is both a performance problem and, in certain applications, a biological risk.</p>

<div class="callout callout-warn">
  <div class="callout-label">Common Specification Trap</div>
  <p>A coil selected at its rated face velocity will deliver rated performance only when the AHU is delivering its design airflow. At part-load, the AHU fan may be running at reduced speed, lowering face velocity and shifting the coil's performance characteristics. Always verify the coil selection at both full-load and the minimum expected part-load airflow condition.</p>
</div>

<h2>Interpolation in Manufacturer Tables</h2>
<p>Manufacturer performance tables are typically published at round-number entering conditions. If your project has an entering air condition of 28.3°C EDB / 18.6°C EWB and a CHW supply of 6.5°C, you are interpolating between table entries in three dimensions simultaneously.</p>
<p>Most manufacturers offer selection software that handles this interpolation using validated curve-fit equations from their own test data. Use it. Manual interpolation across three variables in a performance table introduces enough error to meaningfully affect your leaving conditions — particularly the leaving wet-bulb, which controls the moisture content of your supply air and therefore the space latent load balance.</p>

<h2>What to Do When the Submittal Does Not Match</h2>
<p>The cooling coil submittal arrives and the leaving conditions are 0.8°C warmer and 0.4 g/kg more humid than your design schedule. First, run the three verification checks on the submitted data. If the data is internally consistent, then the coil is performing as the manufacturer represents it, and the discrepancy is between the manufacturer's selection and your design intent.</p>
<p>You can accept the submittal if the leaving condition discrepancy is within the tolerance bands of your load calculation (most load calculations carry a 5–10% uncertainty margin). You can request a revised selection with revised coil geometry. Or you can adjust the chilled water supply temperature setpoint at the chiller to compensate — recognising that this increases chiller energy consumption and may affect other coils on the same water circuit.</p>
<p>What you cannot do is accept the submittal without verifying it, assume the manufacturer has selected optimally, or allow a coil with unverified performance to proceed to installation. The coil is the component that defines the psychrometric condition of every litre of air supplied to the building. Get it right on paper before it goes on the truck.</p>

<h2>The Altitude Correction</h2>
<p>For engineers working at elevated sites — Johannesburg sits at 1,753 m above sea level, where atmospheric pressure is approximately 82.5 kPa rather than the 101.325 kPa assumed by standard coil selection software — performance data must be corrected. At reduced atmospheric pressure, air is less dense. The same volumetric flow rate delivers less mass flow. Sensible capacity drops proportionally.</p>
<p>The practical effect is that a coil sized from sea-level data at a target volumetric flow rate will underperform when installed in Johannesburg. The correction factor for sensible capacity at altitude is approximately proportional to the ratio of air density at altitude to sea-level density — roughly 0.82 for Johannesburg — meaning a coil needs to be approximately 18–22% larger than sea-level selection for the same duty. This is not a small correction. It is the difference between a comfortable building and a commissioning problem that gets attributed to the controls, the diffusers, and everyone except the coil selection.</p>
    `,
  },
]

export function getArticle(slug) {
  return articles.find(a => a.slug === slug) || null
}
