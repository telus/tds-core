import React from 'react';
import { Collapsible } from 'telus-thorium-enriched';

const RegularCollapsibleExample = () => {
    return (
      <Collapsible.Group disabledKeys={["panel-3"]}>
        <Collapsible.Panel header="Panel #1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut justo accumsan, tincidunt ante non, maximus tellus. Praesent ac rutrum mauris. Nunc non viverra tellus. Morbi at ultricies mi. Sed maximus ut augue ut sagittis. Mauris tempor ante id sem ornare iaculis. Quisque lobortis sem sem, id venenatis lorem scelerisque eu. Nunc facilisis lacinia lorem at suscipit. Donec sit amet ligula porttitor nisi tempor tempor eget nec sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed porta, nisi a facilisis ultricies, sem sem
          interdum dolor, sit amet pulvinar augue enim a felis. Etiam nec nunc condimentum,
          accumsan erat in, pellentesque ligula. Praesent fermentum a sapien ac molestie.
          Ut ut consequat eros. Integer feugiat, turpis sit amet molestie maximus, mauris justo
          suscipit lorem, nec blandit mauris lectus eu arcu. Donec urna augue, mattis ut commodo
          nec, fermentum et nisi. </p>

          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Integer et est eu ex ornare fermentum. Aenean dapibus condimentum mauris vitae interdum.
          Nullam id ligula arcu. Vivamus ex orci, posuere ornare augue a, fringilla ornare neque.
          Proin faucibus sapien justo, dignissim pulvinar massa egestas ac. Fusce id augue justo.</p>

          <p>Nullam tortor sapien, sollicitudin ut mauris id, malesuada lobortis risus.
          Duis cursus leo a felis gravida congue. Mauris aliquam fringilla ante, sed facilisis
          nulla luctus ut. Duis molestie elit elit, id maximus erat ullamcorper at. Fusce vitae
          lacus quam. Nulla faucibus dolor elit, in tincidunt lorem hendrerit sed. Phasellus vitae
          sodales justo. Nulla facilisi. Nunc blandit ante in sem egestas, at tempus arcu interdum.
          Suspendisse sodales porttitor pharetra. Nam quis mollis mi. Quisque et ligula quis arcu
          finibus vulputate. Donec gravida eu libero a placerat.
          In hac habitasse platea dictumst. Sed finibus ligula quis lacus lacinia blandit.</p>

          <p>Curabitur sit amet ex finibus, dapibus erat vitae, mattis nibh. Donec imperdiet massa
          id scelerisque faucibus. Maecenas bibendum dui sit amet ultricies dignissim. Nullam
          ullamcorper, enim in pellentesque feugiat, erat ligula tristique dolor, vitae molestie
          tortor augue at quam. Vestibulum sagittis enim eget dolor faucibus pretium. Phasellus
          egestas ultricies nulla. Sed felis justo, scelerisque ut consequat sit amet, malesuada
          vel orci. Praesent dictum tincidunt molestie. Nam in laoreet dui.</p>

          <p>Duis eu aliquam ex. Aliquam volutpat, lacus vitae semper congue, orci metus dapibus
          augue, quis egestas justo est a nulla. Vivamus molestie quis diam sit amet faucibus.
          Morbi eget neque in nisl viverra finibus. Nullam convallis fermentum quam ut commodo.
          Vivamus sit amet lobortis odio. Vestibulum nisl tortor, varius interdum ligula eu,
          efficitur luctus magna. Proin convallis mattis nisi ut semper. Pellentesque vitae
          lorem tellus. Pellentesque bibendum justo dolor, a tempor tortor elementum vel.
          Vestibulum tempus nisi lorem, vel mattis neque pulvinar non.</p>

          <p>Nullam tortor sapien, sollicitudin ut mauris id, malesuada lobortis risus.
          Duis cursus leo a felis gravida congue. Mauris aliquam fringilla ante, sed facilisis
          nulla luctus ut. Duis molestie elit elit, id maximus erat ullamcorper at.
          Fusce vitae lacus quam. Nulla faucibus dolor elit, in tincidunt lorem hendrerit sed.
          Phasellus vitae sodales justo. Nulla facilisi.
          Nunc blandit ante in sem egestas, at tempus arcu interdum.
          Suspendisse sodales porttitor pharetra. Nam quis mollis mi.
          Quisque et ligula quis arcu finibus vulputate. Donec gravida eu libero a placerat.
          In hac habitasse platea dictumst. Sed finibus ligula quis lacus lacinia blandit.</p>

          <p>Curabitur sit amet ex finibus, dapibus erat vitae, mattis nibh. Donec imperdiet massa id scelerisque faucibus. Maecenas bibendum dui sit amet ultricies dignissim. Nullam ullamcorper, enim in pellentesque feugiat, erat ligula tristique dolor, vitae molestie tortor augue at quam. Vestibulum sagittis enim eget dolor faucibus pretium. Phasellus egestas ultricies nulla. Sed felis justo, scelerisque ut consequat sit amet, malesuada vel orci. Praesent dictum tincidunt molestie. Nam in laoreet dui.</p>

          <p>Duis eu aliquam ex. Aliquam volutpat, lacus vitae semper congue, orci metus dapibus
          augue, quis egestas justo est a nulla. Vivamus molestie quis diam sit amet faucibus.
          Morbi eget neque in nisl viverra finibus. Nullam convallis fermentum quam ut commodo.
          Vivamus sit amet lobortis odio. Vestibulum nisl tortor, varius interdum ligula eu,
          efficitur luctus magna. Proin convallis mattis nisi ut semper. Pellentesque vitae
          lorem tellus. Pellentesque bibendum justo dolor, a tempor tortor elementum vel.
          Vestibulum tempus nisi lorem, vel mattis neque pulvinar non.</p>

        </Collapsible.Panel>
        <Collapsible.Panel header="Panel #2">
          <p>Nullam tortor sapien, sollicitudin ut mauris id, malesuada lobortis risus. Duis cursus leo a felis gravida congue. Mauris aliquam fringilla ante, sed facilisis nulla luctus ut. Duis molestie elit elit, id maximus erat ullamcorper at. Fusce vitae lacus quam. Nulla faucibus dolor elit, in tincidunt lorem hendrerit sed. Phasellus vitae sodales justo. Nulla facilisi. Nunc blandit ante in sem egestas, at tempus arcu interdum. Suspendisse sodales porttitor pharetra. Nam quis mollis mi. Quisque et ligula quis arcu finibus vulputate.</p>

          <p>Donec gravida eu libero a placerat. In hac habitasse platea dictumst.
          Sed finibus ligula quis lacus lacinia blandit.</p>

          <p>Curabitur sit amet ex finibus, dapibus erat vitae, mattis nibh. Donec imperdiet
          massa id scelerisque faucibus. Maecenas bibendum dui sit amet ultricies dignissim.
          Nullam ullamcorper, enim in pellentesque feugiat, erat ligula tristique dolor,
          vitae molestie tortor augue at quam.</p>

          <p>Vestibulum sagittis enim eget dolor faucibus pretium. Phasellus egestas ultricies nulla.
          Sed felis justo, scelerisque ut consequat sit amet, malesuada vel orci.
          Praesent dictum tincidunt molestie. Nam in laoreet dui.</p>

          <p>Duis eu aliquam ex. Aliquam volutpat, lacus vitae semper congue,
          orci metus dapibus augue, quis egestas justo est a nulla.
          Vivamus molestie quis diam sit amet faucibus. Morbi eget neque in nisl viverra finibus.
          Nullam convallis fermentum quam ut commodo. Vivamus sit amet lobortis odio.
          Vestibulum nisl tortor, varius interdum ligula eu, efficitur luctus magna.
          Proin convallis mattis nisi ut semper. Pellentesque vitae lorem tellus.
          Pellentesque bibendum justo dolor, a tempor tortor elementum vel.
          Vestibulum tempus nisi lorem, vel mattis neque pulvinar non.</p>
        </Collapsible.Panel>
        <Collapsible.Panel header="Panel #3 is disabled" panelKey="panel-3">
          Panel #3 Body
        </Collapsible.Panel>
      </Collapsible.Group>
    );
}

export default RegularCollapsibleExample;
