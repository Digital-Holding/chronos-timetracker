// @flow
import React from 'react';
import {
  connect,
} from 'react-redux';

import type {
  StatelessFunctionalComponent,
  Node,
} from 'react';
import type {
  Connector,
} from 'react-redux';
import type {
  Id,
  Dispatch,
} from 'types';

import {
  getUiState,
  getTimerState,
  getSelectedIssue,
} from 'selectors';
import {
  ErrorBoundary,
} from 'components';
import {
  uiActions,
  worklogsActions
} from 'actions';
import {
  deleteOldWorklog
} from 'sagas/worklogs';
import {
  reloadFailures
} from 'sagas/issues';
import {
  saveIcon,
  deleteIcon
} from 'utils/data/svg';

import * as S from './styled';
const FailuresView: StatelessFunctionalComponent<Props> = ({
  failedWorklogs,
  dispatch
}: Props): Node => (
      <S.FailuresViewStyle>
        <S.FailuresViewHeader>
        <h1>Entries waiting to be saved:</h1>
        <p>Press the <b>save icon</b> near the entry to retry saving.</p>
        </S.FailuresViewHeader>
        <table>
          <tbody>
          <tr>
            <th>
              issue key
            </th>
            <th>
              start time
            </th>
            <th>
              end time
            </th>
            <th>
              comment
            </th>
            <th>
              actions
            </th>
          </tr>
          {failedWorklogs.map((row, key) => {
            return(
           <tr key={`failure_${row.filename}`}>
            <td>
              {row.issueKey}
            </td>
            <td>
              {row.startReadable}
            </td>
            <td>
              {row.endReadable}
            </td>
            <td>
              {row.comment}
            </td>
            <td>
            <S.ActionIcon
              key={`delete_${row.issueId}`}
              src={deleteIcon}
              onClick={() => {
                if (deleteOldWorklog(row.filename)) {
                  dispatch(uiActions.setUiState({
                    selectedIssueId: null,
                    selectedWorklogId: null,
                  }));
                }
              }}
              alt="Delete"
            />
            <S.ActionIcon
              key={`save_${row.issueId}`}
              src={saveIcon}
              onClick={() => {
                dispatch(worklogsActions.saveWorklogRequest(row));
              }}
              alt="Save"
            />
            </td>
           </tr>)
          })}
          </tbody>
        </table>
      </S.FailuresViewStyle>
      );

function mapStateToProps(state) {

  console.log ({
    failedWorklogs: (getUiState('failedWorklogs')(state) === undefined ? [] : getUiState('failedWorklogs')(state)),
  });

  return {
    failedWorklogs: (getUiState('failedWorklogs')(state) === undefined ? [] : getUiState('failedWorklogs')(state)),
  };
}

const connector: Connector<{}, Props> = connect(
  mapStateToProps,
  dispatch => ({ dispatch }),
);

export default connector(FailuresView);
