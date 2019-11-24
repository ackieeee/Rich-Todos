import * as React from 'react';
import { css } from 'emotion';
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  FormGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { Task, TaskStatus } from '../models/models';
import { taskStatusText } from '../constants/constants';

type Props = {
  open: boolean;
  onClose: () => void;
  tasks: Task[];
  statuses: TaskStatus[];
  onDeleteTasks: ({ targetIds }: { targetIds: number[] }) => void;
};

const baseStyle = css({
  '.MuiDialog-paper': {
    width: '50%',
    height: '70%',
  },
});

const formContainerStyle = css({
  padding: 30,
  margin: '0 auto',
});

const formNavStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const deleteButtonStyle = css({
  width: '100%',
});

const controlStyle = css({
  margin: `24px 0 40px`,
});

const confirmDialogStyle = css({
  textAlign: 'center',
  '.MuiDialog-paper': {
    width: '30%',
  },
});

const confirmDialogButtonsContainerStyle = css({
  display: 'flex',
  margin: `auto 0`,
  padding: `16px 24px`,
  '> button': {
    width: '100%',
  },
});

export const DeleteTaskDialog = ({ open, onClose, tasks, statuses, onDeleteTasks }: Props) => {
  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);
  const [confirmDialogVisible, setConfirmDialogVisible] = React.useState(false);
  const isSelected = React.useCallback((id: number) => selectedIds.includes(id), [selectedIds]);
  const handleChangeSelectedIds = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedId = Number(e.target.value);
      setSelectedIds(
        isSelected(selectedId) ? selectedIds.filter(id => id !== selectedId) : [...selectedIds, selectedId],
      );
    },
    [selectedIds],
  );
  const handleChangeSelectedAllByStatus = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const taskIds = tasks.filter(task => task.status === (e.target.value as TaskStatus)).map(task => task.id);
      setSelectedIds(e.target.checked ? [...selectedIds, ...taskIds] : selectedIds.filter(id => !taskIds.includes(id)));
    },
    [selectedIds, tasks],
  );
  const handleClickSubmit = React.useCallback(() => {
    onDeleteTasks({ targetIds: selectedIds });
    setSelectedIds([]);
    setConfirmDialogVisible(false);
    onClose();
  }, [selectedIds]);
  const handleClickDeleteButton = React.useCallback(() => setConfirmDialogVisible(true), []);
  const handleCloseConfirmDialog = React.useCallback(() => setConfirmDialogVisible(false), []);

  return (
    <>
      <Dialog className={baseStyle} open={open} onClose={onClose} maxWidth="lg">
        <DialogContent>
          <div className={formContainerStyle}>
            {statuses.map(status => (
              <FormControl key={status} fullWidth margin="normal">
                <nav className={formNavStyle}>
                  <FormLabel>{taskStatusText[status]}</FormLabel>
                  <FormControlLabel
                    control={<Checkbox value={status} onChange={handleChangeSelectedAllByStatus} />}
                    label="すべて選択/解除"
                  />
                </nav>
                <FormGroup>
                  {tasks
                    .filter(task => task.status === status)
                    .map(task => (
                      <FormControlLabel
                        key={task.id}
                        control={
                          <Checkbox value={task.id} checked={isSelected(task.id)} onChange={handleChangeSelectedIds} />
                        }
                        label={task.title}
                      />
                    ))}
                </FormGroup>
              </FormControl>
            ))}
            <div className={controlStyle}>
              <Button
                className={deleteButtonStyle}
                disabled={!selectedIds.length}
                variant="contained"
                color="secondary"
                onClick={handleClickDeleteButton}
              >
                <Delete />
                {selectedIds.length ? `${selectedIds.length}件のタスクを削除` : '選択してください'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog className={confirmDialogStyle} open={confirmDialogVisible} onClose={handleCloseConfirmDialog}>
        <p>{`${selectedIds.length}件のタスクを削除します。本当によろしいですか？`}</p>
        <div className={confirmDialogButtonsContainerStyle}>
          <Button onClick={handleCloseConfirmDialog}>キャンセル</Button>
          <Button onClick={handleClickSubmit}>送信</Button>
        </div>
      </Dialog>
    </>
  );
};