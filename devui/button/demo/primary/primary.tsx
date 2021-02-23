import { defineComponent } from 'vue';
import Button from '../../button';

export default defineComponent({
  name: 'd-button-primary',
  setup() {
    return () => {
      return (
        <div>
          <Button bsStyle="primary">primary</Button>
        </div>
      );
    }
  }
});