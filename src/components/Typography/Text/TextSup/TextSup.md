### Usage

The Text Sup component wraps text in a `<sup>` tag. It assures proper font sizes are rendered depending on the parent font size.

**Note: do not use Text Sup within a Heading component. Use [Heading.Sup](#headingsup) instead.**

```
<div>
  <div>
    <Text size="large">Enjoy your choice of <Link href="#">5 channels</Link>, and up to <Link href="#">23 local and regional channels</Link>. Plus, add Premium channel packs like HBO, TMN &amp; Crave TV for just $20/mo. All delivered via TELUS Internet through the Pik TV media box and Pik TV app.<Text.Sup>2</Text.Sup>
    </Text>
  </div>
  <div>
    <Text size="medium">Enjoy buffer-free streaming any time of day<Text.Sup>2</Text.Sup></Text>
  </div>
  <div>
    <Text size="small">Starting at $75 per month on a 2-year plan<Text.Sup>15</Text.Sup></Text>
  </div>
</div>
```
