#!/usr/bin/env node
// resemble-image-cli: Command-line interface for resemble-image
//
// Copyright © 2019 Hugo Locurcio and contributors
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

const path = require('path')
const mri = require('mri')
const args = mri(process.argv.slice(2))
const getVariableWidthStops = require('resemble-image').getVariableWidthStops

const version = '1.0.0'

// Display an help message or the package version
if (args._.length === 0 || args.help || args.h || args.version || args.v) {
  if (args.version || args.v) {
    console.log(`resemble-image ${version}`)
    process.exit(0)
  }

  console.log(`Usage: resemble-image <image> [<images...>]`)

  if (args.help || args.h) {
    process.exit(0)
  } else {
    process.exit(1)
  }
}

const imagePaths = args._

imagePaths.forEach(async (imagePath) => {
  try {
    const stops = await getVariableWidthStops(imagePath, { fidelity: 4 })
    console.log(`${path.basename(imagePath)}\tlinear-gradient(90deg, ${stops[0].color} ${Math.round(stops[0].position)}%, ${stops[1].color} ${Math.round(stops[1].position)}%, ${stops[2].color} ${Math.round(stops[2].position)}%, ${stops[3].color} ${Math.round(stops[3].position)}%)`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})
