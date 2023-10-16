import {exec} from 'node:child_process'

import { PROJECT_EXAMPLE } from './env'

(() => {
    exec(`echo "AFFECTED_PROJECT=${PROJECT_EXAMPLE}" >> $GITHUB_ENV`)
})
