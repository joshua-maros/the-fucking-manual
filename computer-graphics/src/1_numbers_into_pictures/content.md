<script src="content.js"></script>

# Turning Numbers Into Pictures
To start learning computer graphics, it's important to know how a computer
represents a picture in the first place. Computers are basically just very fast
calculators, so we need to find a way to efficiently represent a picture using
only numbers. To find that representation, let's start by looking at how
light exists in the real world.

### How Light Works
Light is made of photons. Every photon of light has a particular frequency that
determines its characteristics. (You may also hear the term "wavelength", which
is the inverse of frequency.) For example, radio waves with their relatively low
frequencies can pass through objects almost completely undisturbed making them
great for long-distance communications. X-Rays with their much, much higher
frequencies can energetically tear their way through flesh but get stopped by
bone. A narrow section of frequencies forms all the light we can see, and is
likewise called "visible light".

![Chart of the electromagnetic spectrum, showing which area corresponds to visible light](https://www.wikilectures.eu/images/6/68/4.2_wavelengthspectrum.png)
*Electromagnetic Spectrum by Wikilectures, licensed under CC BY-SA 3.0, [click for source](https://www.wikilectures.eu/w/LIGHT,_EYE_AND_VISION#1.1.4..C2.A0Eye)*

Light sources emit
many photons in a range of visible frequencies. When these photons hit other
objects, they may be absorbed or deflected in some manner. Different objects
will absorb more or less of particular frequencies, which is why objects appear
to have different colors. It is the frequencies of light that they leave
unabsorbed that determine the color the object appears to be.

### Too Much Data
From that initial description, we could construct a simple but inefficient way
of representing a picture using only numbers. We could store a list of photons,
each photon being represened by four numbers. The first three would describe the
position of the photon and the fourth would be the frequency of the photon.
While this works, it would make pictures take up a massive amount of data. A
good photo would be made of billions of photons. Something we can take advantage
of, though, is that we do not need to make a perfect replica of something that
exists in real life. We only need something good enough to fool a human eye. To
see how we might do that, let's recap how the human eye works.

### Our Eyes
We see an object when light bounces off of that object and enters our eyes,
striking a layer of light-sensetive cells called the retina. Inside the retina,
there are four different kinds of cells which detect light. Each of these
respond only to certain frequencies of light.

![Graph of how different cells respond to frequencies of light](https://www.wikilectures.eu/images/5/53/4.2.4rhodsandconesgraf.png)
*Rods And Cones by Wikilectures, licensed under CC BY-SA 3.0, [click for source](https://www.wikilectures.eu/w/LIGHT,_EYE_AND_VISION#1.1.4..C2.A0Eye)*

From this, we can derive two very useful hacks. First, we don't have to store
positions of photons in the real world, we just have to store enough "photons"
to match the detail of the human retina. The second useful hack is that we don't
need to know the exact frequencies of the light in the image, we only need to
store how much the cells in a person's retinas are excited. In practice, storing
how much the cones would get excited and ignoring the rods is enough to get a
very good image. This all leads us to the way images are *actually* stored:

### How It All Works
Images are just big grids. The boxes are called "pixels". Each pixel stores how
much light from that pixel excites the three cones of the human eye. A computer
display is likewise built of a grid of pixels. Each pixel has a red, green, and
blue light, usually abbreviated as RGB. By controlling the brightness of each
light, the corresponding cones in the human eye can be activated. We normally
represent the strengths of those components in one of two ways. The first is
with decimal numbers ranging from 0 to 1, which is mathematically useful for
generating or manipulating images. The second is with an integer from 0 to 255,
which is usually how images are stored since it's more space efficient than
decimal numbers but still enough resolution that (when used correctly) the human
eye does not percieve the sudden steps between levels of brightness associated
with each number. Since pixels lie on a grid, we can also use numbers to
describe positions in the image called coordinates. These coordinates are two
dimensional, having an X coordinate and a Y coordinate. They can have any unit,
so it is common for image editing applications to support using units like
inches and centimeters so an artist will know how large their image will be when
printed. The simplest unit is to just use pixels, where 1 unit is equal to the
size of a pixel. This usually doesn't come with any abbreviation. For example, a
standard HD image measures "1920x1080", meaning there are 1,920 pixels from left
to right and 1,080 pixels from top to bottom.

<div id="test-sketch" class="sketch"></div>

*Image by Julius Silver, licensed under CC0, [click for source](https://www.pexels.com/photo/saint-basil-s-cathedral-753339/)*
