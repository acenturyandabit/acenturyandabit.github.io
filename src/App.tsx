import * as React from "react";
import './App.css'
import Background from "~Background";

export default () => (
  <>
    <Background>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Radio+Canada" />
      <h1>acenturyandabit's space</h1>
      <p>Hi, I'm <span className="with-title" title="a/century/and/a/bit, becuase if I live to 101 then I will have lived through three centuries. Fingers crossed!">acenturyandabit</span>! I'm a software developer, teacher, and robotics enthusiast.</p>
      <p>Here's a few things I've made or am working on:</p>
      <ul>
        <li>
          <h2>Sydney Quant Trading Mock Trading Engine (<a href="https://quanttraders.club">here</a>)</h2>
          <p>Sydney Quant Trading is a society of university students who are interested in careers in quantitative
            trading. I worked with a team of developers to design, develop and deploy a trading engine for their
            mock trading engine, which handled over 700 requests from 30 players in a fast-paced mock trading game. (I also designed and printed their t-shirts!)
          </p>
        </li>
        <li>
          <h2>Workflowish: Recursive list task/knowledge management software (<a
            href="https://acenturyandabit.github.io/workflowish/">here</a>)</h2>
          <p>My everyday task management / todo app, similar to <a href="https://workflowy.com/">Workflowy</a>.</p>
        </li>
        <li>
          <h2>Fortknight: Beginner-Friendly Open Source Project (<a
            href="http://github.com/acenturyandabit/fortknight">here</a>)</h2>
          <p>A coding project that new developers can submit a pull request to, that is much more approachable than
            other open source efforts but also more technically challenging than existing first-pull-request
            repositories.</p>
        </li>
        <li>
          <h2>Jody's Snatch Trainer: Train your anagram skills (<a
            href="https://snatch-trainer.acenturyandabit.xyz/">here</a>)</h2>
          <p>A place to train anagram recognition for the multiplayer anagram game Snatch it! Dedicated to lazy
            Fridays spent playing Snatch with my friend Jody. Written using React and Node.js.</p>
        </li>
        <li>
          <h2>ShuffleCut: Learn dance faster (<a href="https://shufflecut.acenturyandabit.xyz/">here</a>)</h2>
          <p>A tool for learning dance faster from dance videos. Allows you to segment and loop segments of dance
            videos, allowing learning and practice of specific sections.</p>
        </li>
        <li>
          <h2>Text Glob Transformer UI (<a href="http://acenturyandabit.github.io/glob_transformer">here</a>)</h2>
          <p>Sometimes I'm trying to transform text data with an unknown pattern and I need a quick scratchpad to do
            it,
            where I can easily replace the input if something new comes up.</p>
        </li>
        <li>
          <h2>Eye-tracking Parallax Depth Effect (<a href="bigger_on_inside">here</a>)</h2>
          <p>An eye-tracking web toy that makes it look like there is a corridor in your screen. Move your head around
            to see the effect! - Note: The machine learning model takes some time to start up and is quite laggy.
            Credits to <a href="https://jsantell.com/portals-with-asymmetric-projection">Jordan Santell</a> and <a
              href="https://www.anxious-bored.com/blog/2018/2/25/theparallaxview-illusion-of-depth-by-3d-head-tracking-on-iphone-x">Peder
              Norrby</a> for inspiration and guidance.
          </p>
        </li>
        <li>
          <h2>2D Plotter for CSV/JSON (<a href="http://acenturyandabit.github.io/2d_plotter">here</a>)</h2>
          <p>A 2D plotter GUI, which generates coordinates in CSV and JSON. Useful sometimes in engineering.</p>
        </li>
        {/*
        <li>
            <h2>Stepping Stones [Work in progress]</h2>
            <a href="http://stepping-stones.acenturyandabit.xyz">here</a><br>
            <p>A list of all humanly learnable skills, with prerequisites to age zero.</p>
        </li>
      */}
      </ul>
    </Background >
  </>
);
