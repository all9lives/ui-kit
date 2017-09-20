export const base = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default {
  main: {
    ...base.main,
    display: 'flex',
    height: '100vh',
    backgroundColor: '#e0ecff'
  }
}
