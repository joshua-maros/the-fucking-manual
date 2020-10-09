<script src="anims.js"></script>

# Turning Numbers Into Pictures
To start learning computer graphics, it's important to know how a computer
represents a picture in the first place. Computers are basically just very fast
calculators, so we need to find a way to efficiently represent a picture only
using numbers. To find that representation, let's start by looking at how light
exists in the real world.

### How Light Works
Light is made of photons. Every photon of light has a particular frequency that
determines its characteristics. (You may also hear the term "wavelength", which
is the inverse of frequency.) For example, mircowaves and radio waves with their
relatively low frequencies can pass through objects almost completely
undisturbed making them great for long-distance communications. X-Rays with
their much, much higher frequencies can energetically tear their way through
flesh but get stopped by bone. A narrow section of frequencies forms all the
light we can see, and is likewise called "visible light". Light sources emit
many photons in a range of visible frequencies. When these photons hit other
objects, they may be absorbed or deflected in some manner. Different objects
will absorb more or less of particular frequencies, which is why objects appear
to have different colors. It is the frequencies of light that they leave
unabsorbed that determine the color the object appears to be.

### Too Much Data
From that initial description, we could construct a simple but inefficient way
of representing a picture using only numbers. We could store a list of photons,
each photon being represened by four numbers. The first three would be the
position of the photon and the fourth would be the frequency of the photon.
While this works, it would make pictures take up a massive amount of data. A
good photo would be made of billions of photons. Something we can take advantage
of, though, is that we do not need to make a perfect replica of something that
exists in real life. We only need something good enough to fool a human eye. To
see how we might do that, let's recap how the human eye works.

### Our Eyes
We see an object when light bounces off of that object and enters our eyes,
striking a layer of light-sensetive cells called the retina. The retina
transmits what it sees to our brain. Inside the retina, there are four different
kinds of cells which detect light. Each of these respond differently to
different frequencies of light.

![Graph of how different cells respond to frequencies of light](https://www.wikilectures.eu/images/5/53/4.2.4rhodsandconesgraf.png)

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
light, the corresponding cones in the human eye can be activated.
