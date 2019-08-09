# resemble-image-cli

**Command-line interface for
[resemble-image](https://github.com/Lorti/resemble-image).**

## Use cases

- Generate fallback CSS gradients for images. This can be used to improve
  perceived performance on slower connections. See
  [this article](https://manu.ninja/thoughts-on-linear-gradients-that-resemble-images)
  for examples.

## Installation

### Dependencies

- [Node.js](https://nodejs.org/) 8.x or later

### Installing the package

Enter one of the following commands in a terminal:

```bash
# Using npm
npm install -g resemble-image-cli
# Using yarn
yarn global add resemble-image-cli
```

## Usage

See the command-line help:

```text
Usage: resemble-image <image> [<images...>]
```

Example output (the order isn't guaranteed, as it runs in parallel):

```text
$ resemble-image 1.jpg 2.jpg 3.jpg 4.jpg 5.jpg 6.jpg
2.jpg   linear-gradient(90deg, #718aaa 2%, #7d90a2 22%, #727e87 30%, #6e7063 84%)
1.jpg   linear-gradient(90deg, #19180f 10%, #353b2c 26%, #567386 60%, #567388 85%)
4.jpg   linear-gradient(90deg, #3b393c 13%, #3c393c 37%, #3b393c 49%, #3b393c 68%)
5.jpg   linear-gradient(90deg, #070707 16%, #11110f 37%, #1e1e19 58%, #070707 91%)
6.jpg   linear-gradient(90deg, #060606 13%, #0c0907 46%, #060606 66%, #131212 92%)
3.jpg   linear-gradient(90deg, #617085 15%, #606f85 52%, #72849d 86%, #758dad 92%)
```

## License

Copyright © 2019 Hugo Locurcio and contributors

Unless otherwise specified, files in this repository are licensed under
the MIT license; see [LICENSE.md](LICENSE.md) for more information.
