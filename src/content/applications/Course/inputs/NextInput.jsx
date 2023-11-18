import * as React from 'react';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/material-ui/getting-started/installation/" {...props} />
  ));
  
  function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
      return <StaticRouter location="/">{children}</StaticRouter>;
    }
  
    return <MemoryRouter>{children}</MemoryRouter>;
  }


function NextInput ({ onNext, link  }) {
    console.log('NextInput', link);
    return (
        <Card style={{ marginTop: '25px', marginBottom: '25px', padding: '20px' }}>
            <Button onClick={onNext} sx={{ height: '53px', width: '10%', marginLeft: '90%'}} variant="outlined">Далее</Button>
        </Card>
    );
}

export default NextInput;