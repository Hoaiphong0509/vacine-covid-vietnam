import { PowerBIEmbed } from 'powerbi-client-react'
import { models } from 'powerbi-client'

export default function PowerBi() {
  return (
    <PowerBIEmbed
      embedConfig={{
        type: 'report', // Supported types: report, dashboard, tile, visual and qna
        id: '56e87220-9492-4dac-8c93-1e6cc3b665fe',
        embedUrl:
          'https://app.powerbi.com/reportEmbed?reportId=56e87220-9492-4dac-8c93-1e6cc3b665fe',
        accessToken:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCIsImtpZCI6Imwzc1EtNTBjQ0g0eEJWWkxIVEd3blNSNzY4MCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMGYwN2E5ZjYtYWVlMC00ZTVmLThjNjYtOTAxMjc3YWE3YmVjLyIsImlhdCI6MTYzODc0NzczNSwibmJmIjoxNjM4NzQ3NzM1LCJleHAiOjE2Mzg3NTMzOTgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFKdks0WEJJSjZkV3RheHgrWnFqTlNVSFQrd2Q2Zis0UThqSGFFMk01VHhNRmoxZnFnNUpFbGpwMlhMNThMeVUvaEhsT1RTcGsvUkROSEdKd3hZblg4MTJ1Wi8xa0dsclJZTURkZTdTSEQ2RT0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZmFtaWx5X25hbWUiOiJOZ3V54buFbiIsImdpdmVuX25hbWUiOiJIb8OgaSBQaG9uZyIsImlwYWRkciI6IjI3LjY1LjEzOC40NiIsIm5hbWUiOiJIb8OgaSBQaG9uZyBOZ3V54buFbiIsIm9pZCI6IjdkZjk2NWFmLWVmMzgtNDQ4MC04NzY5LWIxMjlmNmI0NTI1YSIsInB1aWQiOiIxMDAzMjAwMUFBNjI0RTM1IiwicmgiOiIwLkFYRUE5cWtIRC1DdVgwNk1acEFTZDZwNzdBOEJISWRoWHJGUGc2eVlZUXAta1JDSEFGdy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJYSndmNzhxQTRpanphQVJhXzNZZFdlMHhfMExWUkhFUE9yWG5qTk1hS1dVIiwidGlkIjoiMGYwN2E5ZjYtYWVlMC00ZTVmLThjNjYtOTAxMjc3YWE3YmVjIiwidW5pcXVlX25hbWUiOiJob2FpcGhvbmdAMG1rN2cub25taWNyb3NvZnQuY29tIiwidXBuIjoiaG9haXBob25nQDBtazdnLm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6Il9DRmtwVnFYV0VpbTcwQzdUVU14QXciLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.PaD9iKbkgq7RKeiShOjNG8L3XI6A-FciSDOidKiUUYDxlbU6-NFCSDBHoKSIVRF5-sWucb_ayHyI_AE-CE9CyoWiYg7KH9lkRpsEYwVGg_wL5UDkgNmq_bmaKp359tQeVmkBB7Ch6pgjuyWpsvTxphxJ5yYPw1ONQ7uCKVs2Ea50V45jmU_UyjS4RvNDzrMUD87v8VPjPGWP4_GDCaP2niRLIXDUXuEmaLMMRNvQM_eyhNy7bvQnvX_wiAI-rvK4SuUcFsIq4DYEGB9UPrHFHeLIPcDWdEQA80L6-UEZG3Y97S9mug1krnxR43zzoskarXsH0D729aQS_XtTw0CRFg',
        tokenType: models.TokenType.Aad,
        settings: {
          panes: {
            filters: {
              expanded: false,
              visible: false,
            },
          },
        },
      }}
      eventHandlers={
        new Map([
          [
            'loaded',
            function () {
              console.log('Report loaded')
            },
          ],
          [
            'rendered',
            function () {
              console.log('Report rendered')
            },
          ],
          [
            'error',
            function (event) {
              console.log(event.detail)
            },
          ],
        ])
      }
      cssClassName={'Embed-container'}
      getEmbeddedComponent={(embeddedReport) => {
        window.report = embeddedReport
      }}
    />
  )
}
