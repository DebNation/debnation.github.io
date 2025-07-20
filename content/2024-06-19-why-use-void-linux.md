+++
title = 'Why Should you use void linux'
date = 2024-06-19T07:07:07+01:00
description = "Void linux deserve more users"
tags = 'markdown'
+++

## What is Void Linux:

void is a systemd-free runit based init system distro, who tries to be a independent free of the systemd monopoly and give it's users a clean system experience.

## Why You should Use Void(in my opinion)

#### 1. Package manager:

- Void has a one of the best package manager out there, it's very fast although the mirrors are kind of slow.
- Void packages are very small, they don't include debug packages when you install some core utils, so that does make it very lightweight.
- Void package availability is surprisingly much better than pacman, or I think so excluding aur, found some packages in void repo which aren't available in pacman.

#### 2. Runit:

- Runit is very fast even faster than systemd, boot time is less than 5 sec, unlike openrc it starts services in parallal.

#### 3. Stability:

- Void is very stable, even though though they are rolling release linux distribution, it is rock solid, the packages are rarely breaks.

#### 4: Documentation:

- Yes, I know their documentation sucks, but it is great when you don't need alot of things to run a system, it covers almost all the basic things needed to setup or fix.

#### 5: Very Small Footprint:

| Architechture | CPU              | RAM  | Storage |
| ------------- | ---------------- | ---- | ------- |
| x86_64-glibc  | x86_64           | 96MB | 700MB   |
| x86_64-musl   | x86_64           | 96MB | 600MB   |
| i686-glibc    | Pentium 4 (SSE2) | 96MB | 700MB   |

- The base memory foot print is very small even smaller than arch linux.
