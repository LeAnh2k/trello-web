import Box from '@mui/system/Box'

function BoardBar () {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: theme => theme.jm.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Board bar
    </Box>
  )
}

export default BoardBar
