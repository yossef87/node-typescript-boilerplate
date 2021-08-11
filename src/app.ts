import express = require('express');

const app: express.Application = express();
app.use(express.json())
const port = 4000;

// const token = "8URJ6maR8NEA8NqTz9Sg1xFyEOR5hhWw/KGKy+hPE0FDy6Y2ucVrV+b14QMXnpc9EDEsrhdPZFTT3MqRADgd4hvVS5evfggsJzeqcps2qTyFrTY89fZkRFOR2ClminYI8gYHQS046A7YZAXcLqNQH8a8T8aGR7C5JN7NYBluBKnkIQssJEUpqQPhQebaJBaTy2WyA+Xfxmq1uiFCvORu7JlyLEsbPvY38SSf4n7EjRclEgGZViWC0lg+RTGVVo9BUEezGVWBU4UjGwHAdciXVYxuqcVWv7Zj1okk7zGESevALHKDz4YAGNIXmdjPb4jil40xpItCtJGqGMyyQMGwnbz0MqoYA8aPYCoM2KlIKJ7bmLDKldsp1P7WIj/1YMDtswK42Fp89FNEyj6BJvB2x6d9CCzwpyPVc/OA3BANN+HJZrkUDvNYvkhUJ5xycLFsMR00BXG2BWSYprIteipGU1W5Fw2xKHwfSl7ai2F/Bc5zPyNRtJS/LO3nYuApqLtF345EvL+8d74UvWSlSmYltasgzLHD9LFfXCVSeDIJroNTg36k2u1k+KgPf+gaChqJrlshUpHcGvDl+Jn4qc4kRHFgXbewf7I5Oa8QUenDhcdo5ZwC4PuGRNryOA8UDA0eCaiS4100MQuG4LYrgoVi/JHHvlvlrU5vgL7w38hhc4cWOXIXy128Y5wzsGK8/7MrYWXh2ezh567ojbDK8h4JnX/OqImA999O9Xk7Efq4eU2LR3ffuK3uptNU6f57NY2cFZO1GR3aLVHIcmBJWYieA4Hw5e2gmim9AbWGVMl2VSyCEn5HA2MjkhDzx6mXPOm7xKMwoghI9lIFSSe56FF5hAV0UO1DQJ7TTIenfh1kvVKZ/DIXTgcltn009iYo+tasPJ1rKcbYDeSKRK8/acxFNlqalaR1xVPiIrEm2+weLoobF5cW9RlULeybFv1WirAvIwdj3nPPB3ynubiF3McbCltt2O+z2pMhjWzgJqVhvVrhzEU+E7MAUbxsEw6uAfhMACKrHYfFhGUPGajv9NIkva6ZBaPHRewRBe5XsB6x3LboMbXwDx4GZhZWgg5dPkOU+uDO6Fz5Nwgl+WQMPGyql3Z/6lMTKUWQciWsZwmvDKQjIJbIGquUOaOmZ8mMJzQHE7IPnS+JsAF+tGSuPlbj+Wwx3BdK2cRyCTDqiW8Cp43TgBL0mHIrJm9H7AGZSIiFFis1RrKjmDDZuMu9xq2tDvTfub0Jv7kDE0Y8bDi752icWaFf8s3b9NJCXU75uAklXBdQoB/itfN/zN6NVqlUhkxsv/LGnBcs212FD3x19z9sWBHDJACbC00B75E";

app.get( "/", ( req, res ) => {
  // render the index template
  res.send("running");
} );

app.listen( port, () => {
  // tslint:disable-next-line:no-console
  console.log( `server started at http://localhost:${ port }` );
} );