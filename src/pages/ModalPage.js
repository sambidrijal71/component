import Modal from "../components/Modal"
import Button from '../components/Button'
import { useState } from "react"

function ModalPage() {
    const [showModal, setShowModal] = useState(false)
    const handleClick = () => {
        setShowModal(true)
    }
    const handleClose = () => {
        setShowModal(false)
    }
    const actionBar = (
        <Button onClick={handleClose} success outline rounded>I agree on your pain</Button>
    );
    const modal = <Modal onClose={handleClose} actionBar={actionBar}><p>Here's some important information on Modal. It is very very hard and confusing to create one.</p>
    </Modal>


    return (<div className="relative">
        <Button primary onClick={handleClick}>Open Modal</Button>
        {showModal && modal}

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et risus nec nisl lacinia eleifend finibus non neque. Vivamus pulvinar nisl et quam egestas, id pretium ligula dapibus. Phasellus euismod porttitor dui vel laoreet. Fusce vel ipsum porttitor, tempus odio ac, efficitur mauris. Donec quam ex, tempor sit amet libero porta, sagittis eleifend justo. Nunc auctor pharetra bibendum. Nulla vestibulum euismod euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel nibh hendrerit, sodales nisi ut, blandit erat. Donec lobortis odio quis mi consectetur porttitor. Donec in ultrices orci. Etiam pharetra vehicula est vel gravida. Maecenas nisi ligula, fermentum at metus tempor, semper gravida justo. Nulla mattis, nunc non rutrum egestas, metus purus ornare urna, placerat dignissim sem nunc non felis. Maecenas rutrum hendrerit nisl, a luctus nisi volutpat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et risus nec nisl lacinia eleifend finibus non neque. Vivamus pulvinar nisl et quam egestas, id pretium ligula dapibus. Phasellus euismod porttitor dui vel laoreet. Fusce vel ipsum porttitor, tempus odio ac, efficitur mauris. Donec quam ex, tempor sit amet libero porta, sagittis eleifend justo. Nunc auctor pharetra bibendum. Nulla vestibulum euismod euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel nibh hendrerit, sodales nisi ut, blandit erat. Donec lobortis odio quis mi consectetur porttitor. Donec in ultrices orci. Etiam pharetra vehicula est vel gravida. Maecenas nisi ligula, fermentum at metus tempor, semper gravida justo. Nulla mattis, nunc non rutrum egestas, metus purus ornare urna, placerat dignissim sem nunc non felis. Maecenas rutrum hendrerit nisl, a luctus nisi volutpat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et risus nec nisl lacinia eleifend finibus non neque. Vivamus pulvinar nisl et quam egestas, id pretium ligula dapibus. Phasellus euismod porttitor dui vel laoreet. Fusce vel ipsum porttitor, tempus odio ac, efficitur mauris. Donec quam ex, tempor sit amet libero porta, sagittis eleifend justo. Nunc auctor pharetra bibendum. Nulla vestibulum euismod euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel nibh hendrerit, sodales nisi ut, blandit erat. Donec lobortis odio quis mi consectetur porttitor. Donec in ultrices orci. Etiam pharetra vehicula est vel gravida. Maecenas nisi ligula, fermentum at metus tempor, semper gravida justo. Nulla mattis, nunc non rutrum egestas, metus purus ornare urna, placerat dignissim sem nunc non felis. Maecenas rutrum hendrerit nisl, a luctus nisi volutpat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et risus nec nisl lacinia eleifend finibus non neque. Vivamus pulvinar nisl et quam egestas, id pretium ligula dapibus. Phasellus euismod porttitor dui vel laoreet. Fusce vel ipsum porttitor, tempus odio ac, efficitur mauris. Donec quam ex, tempor sit amet libero porta, sagittis eleifend justo. Nunc auctor pharetra bibendum. Nulla vestibulum euismod euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel nibh hendrerit, sodales nisi ut, blandit erat. Donec lobortis odio quis mi consectetur porttitor. Donec in ultrices orci. Etiam pharetra vehicula est vel gravida. Maecenas nisi ligula, fermentum at metus tempor, semper gravida justo. Nulla mattis, nunc non rutrum egestas, metus purus ornare urna, placerat dignissim sem nunc non felis. Maecenas rutrum hendrerit nisl, a luctus nisi volutpat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et risus nec nisl lacinia eleifend finibus non neque. Vivamus pulvinar nisl et quam egestas, id pretium ligula dapibus. Phasellus euismod porttitor dui vel laoreet. Fusce vel ipsum porttitor, tempus odio ac, efficitur mauris. Donec quam ex, tempor sit amet libero porta, sagittis eleifend justo. Nunc auctor pharetra bibendum. Nulla vestibulum euismod euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel nibh hendrerit, sodales nisi ut, blandit erat. Donec lobortis odio quis mi consectetur porttitor. Donec in ultrices orci. Etiam pharetra vehicula est vel gravida. Maecenas nisi ligula, fermentum at metus tempor, semper gravida justo. Nulla mattis, nunc non rutrum egestas, metus purus ornare urna, placerat dignissim sem nunc non felis. Maecenas rutrum hendrerit nisl, a luctus nisi volutpat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et risus nec nisl lacinia eleifend finibus non neque. Vivamus pulvinar nisl et quam egestas, id pretium ligula dapibus. Phasellus euismod porttitor dui vel laoreet. Fusce vel ipsum porttitor, tempus odio ac, efficitur mauris. Donec quam ex, tempor sit amet libero porta, sagittis eleifend justo. Nunc auctor pharetra bibendum. Nulla vestibulum euismod euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel nibh hendrerit, sodales nisi ut, blandit erat. Donec lobortis odio quis mi consectetur porttitor. Donec in ultrices orci. Etiam pharetra vehicula est vel gravida. Maecenas nisi ligula, fermentum at metus tempor, semper gravida justo. Nulla mattis, nunc non rutrum egestas, metus purus ornare urna, placerat dignissim sem nunc non felis. Maecenas rutrum hendrerit nisl, a luctus nisi volutpat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et risus nec nisl lacinia eleifend finibus non neque. Vivamus pulvinar nisl et quam egestas, id pretium ligula dapibus. Phasellus euismod porttitor dui vel laoreet. Fusce vel ipsum porttitor, tempus odio ac, efficitur mauris. Donec quam ex, tempor sit amet libero porta, sagittis eleifend justo. Nunc auctor pharetra bibendum. Nulla vestibulum euismod euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel nibh hendrerit, sodales nisi ut, blandit erat. Donec lobortis odio quis mi consectetur porttitor. Donec in ultrices orci. Etiam pharetra vehicula est vel gravida. Maecenas nisi ligula, fermentum at metus tempor, semper gravida justo. Nulla mattis, nunc non rutrum egestas, metus purus ornare urna, placerat dignissim sem nunc non felis. Maecenas rutrum hendrerit nisl, a luctus nisi volutpat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et risus nec nisl lacinia eleifend finibus non neque. Vivamus pulvinar nisl et quam egestas, id pretium ligula dapibus. Phasellus euismod porttitor dui vel laoreet. Fusce vel ipsum porttitor, tempus odio ac, efficitur mauris. Donec quam ex, tempor sit amet libero porta, sagittis eleifend justo. Nunc auctor pharetra bibendum. Nulla vestibulum euismod euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel nibh hendrerit, sodales nisi ut, blandit erat. Donec lobortis odio quis mi consectetur porttitor. Donec in ultrices orci. Etiam pharetra vehicula est vel gravida. Maecenas nisi ligula, fermentum at metus tempor, semper gravida justo. Nulla mattis, nunc non rutrum egestas, metus purus ornare urna, placerat dignissim sem nunc non felis. Maecenas rutrum hendrerit nisl, a luctus nisi volutpat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et risus nec nisl lacinia eleifend finibus non neque. Vivamus pulvinar nisl et quam egestas, id pretium ligula dapibus. Phasellus euismod porttitor dui vel laoreet. Fusce vel ipsum porttitor, tempus odio ac, efficitur mauris. Donec quam ex, tempor sit amet libero porta, sagittis eleifend justo. Nunc auctor pharetra bibendum. Nulla vestibulum euismod euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel nibh hendrerit, sodales nisi ut, blandit erat. Donec lobortis odio quis mi consectetur porttitor. Donec in ultrices orci. Etiam pharetra vehicula est vel gravida. Maecenas nisi ligula, fermentum at metus tempor, semper gravida justo. Nulla mattis, nunc non rutrum egestas, metus purus ornare urna, placerat dignissim sem nunc non felis. Maecenas rutrum hendrerit nisl, a luctus nisi volutpat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et risus nec nisl lacinia eleifend finibus non neque. Vivamus pulvinar nisl et quam egestas, id pretium ligula dapibus. Phasellus euismod porttitor dui vel laoreet. Fusce vel ipsum porttitor, tempus odio ac, efficitur mauris. Donec quam ex, tempor sit amet libero porta, sagittis eleifend justo. Nunc auctor pharetra bibendum. Nulla vestibulum euismod euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel nibh hendrerit, sodales nisi ut, blandit erat. Donec lobortis odio quis mi consectetur porttitor. Donec in ultrices orci. Etiam pharetra vehicula est vel gravida. Maecenas nisi ligula, fermentum at metus tempor, semper gravida justo. Nulla mattis, nunc non rutrum egestas, metus purus ornare urna, placerat dignissim sem nunc non felis. Maecenas rutrum hendrerit nisl, a luctus nisi volutpat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et risus nec nisl lacinia eleifend finibus non neque. Vivamus pulvinar nisl et quam egestas, id pretium ligula dapibus. Phasellus euismod porttitor dui vel laoreet. Fusce vel ipsum porttitor, tempus odio ac, efficitur mauris. Donec quam ex, tempor sit amet libero porta, sagittis eleifend justo. Nunc auctor pharetra bibendum. Nulla vestibulum euismod euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel nibh hendrerit, sodales nisi ut, blandit erat. Donec lobortis odio quis mi consectetur porttitor. Donec in ultrices orci. Etiam pharetra vehicula est vel gravida. Maecenas nisi ligula, fermentum at metus tempor, semper gravida justo. Nulla mattis, nunc non rutrum egestas, metus purus ornare urna, placerat dignissim sem nunc non felis. Maecenas rutrum hendrerit nisl, a luctus nisi volutpat ac.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et risus nec nisl lacinia eleifend finibus non neque. Vivamus pulvinar nisl et quam egestas, id pretium ligula dapibus. Phasellus euismod porttitor dui vel laoreet. Fusce vel ipsum porttitor, tempus odio ac, efficitur mauris. Donec quam ex, tempor sit amet libero porta, sagittis eleifend justo. Nunc auctor pharetra bibendum. Nulla vestibulum euismod euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel nibh hendrerit, sodales nisi ut, blandit erat. Donec lobortis odio quis mi consectetur porttitor. Donec in ultrices orci. Etiam pharetra vehicula est vel gravida. Maecenas nisi ligula, fermentum at metus tempor, semper gravida justo. Nulla mattis, nunc non rutrum egestas, metus purus ornare urna, placerat dignissim sem nunc non felis. Maecenas rutrum hendrerit nisl, a luctus nisi volutpat ac.
        </p>

    </div>)
}

export default ModalPage