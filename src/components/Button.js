import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const FloatingActionButtonExampleSimple = () => (
  <div>
    <div>
        <h2>
            Login
        </h2>
        <FloatingActionButton style={style}>
        <p>
            G
        </p>
        <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton style={style}>
        <p>
            F
        </p>
        <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton style={style}>
        <p>
            Otro
        </p>
        <ContentAdd />
        </FloatingActionButton>
    </div>
    <div>
        <h2>
            Sign in
        </h2>
        <FloatingActionButton style={style}>
        <p>
            G
        </p>
        <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton style={style}>
        <p>
            F
        </p>
        <ContentAdd />
        </FloatingActionButton>
        <FloatingActionButton style={style}>
        <p>
            Otro
        </p>
        <ContentAdd />
        </FloatingActionButton>
    </div>
  </div>
);

export default FloatingActionButtonExampleSimple;