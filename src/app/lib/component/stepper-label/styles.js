import { styled } from '@mui/material/styles';

export const QontoStepIconRoot = styled('div')(() => ({
  display: 'flex',
  height: 22,
  '& .QontoStepIcon-completedIcon': {
    zIndex: 1,
    height: 30,
    width: 30,
    backgroundColor: '#654de2',
    borderRadius: '50%',
    color: '#fff',
    textAlign: 'center',

  },
  '& .QontoStepIcon-circle': {
    height: 30,
    width: 30,
    backgroundColor: '#fff',
    border: '1px solid #a6a3a3',
    borderRadius: '50%',
    display: 'inline-block',
    color: '#000',
    zIndex: '1000',
    textAlign: 'center',
  }, '& .QontoStepIcon-active': {
    height: 30,
    width: 30,
    backgroundColor: '#654de2',
    borderRadius: '50%',
    display: 'inline-block',
    color: '#fff',
    textAlign: 'center',
  },
  '& .QontoStepIcon-label': {
    margin: 10,
    marginTop: 6,
    position: 'absolute',
    marginLeft: -4,
    fontSize: 14,
    fontWeight: 600,
  },
}));
