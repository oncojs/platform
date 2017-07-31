import * as React from 'react';
import {
  Button,
  Dialog,
  Intent,
  Tooltip,
  Text,
  Spinner,
} from '@blueprintjs/core';
import { Flex } from 'grid-styled';

const initState = {
  isOpen: false,
  isBusy: false,
  files: null,
  text: '',
};

class UploadIds extends React.Component {
  state = initState;

  handleFileUpload = (event, validation) => {
    const FileList = event.target.files;
    const total = FileList.length;
    let loaded = 0;
    const files = this.state.files || {};

    for (let i = 0; i < total; i++) {
      const file = FileList[i];
      files[file.name] = {
        name: file.name,
        isLoading: true,
        loadingSuccess: false,
        hasError: false,
        progress: 0,
      };

      const reader = new FileReader();
      reader.readAsText(file);
      reader.onprogress = data => {
        if (data.lengthComputable) {
          const files = this.state.files;
          const progress = data.loaded / data.total;
          files[file.name].progress = progress;
          this.setState({
            files,
          });
        }
      };
      reader.onloadend = () => {
        loaded++;

        const files = this.state.files;
        files[file.name] = {
          ...files[file.name],
          isLoading: false,
          success: true,
          progress: 100,
        };

        this.setState({
          files,
        });

        if (loaded === total) {
          this.setState({
            isBusy: false,
          });
        }
      };
    }

    this.setState({ files, isBusy: true });

    /*
    *  In IE, changing the input refires `onchange` with an empty file
    *  Without resetting the input, you cannot submit the same file twice.
    */
    if (!('ActiveXObject' in window)) {
      event.target.value = '';
    }
  };

  render() {
    return (
      <div>
        <Button iconName="upload" onClick={this.openDialog} text="Upload" />
        <Dialog
          iconName="upload"
          isOpen={this.state.isOpen}
          onClose={this.closeDialog}
          title="Upload Set"
        >
          <div className="pt-dialog-body">
            <div className="pt-form-group">
              <div className="pt-callout">
                <Flex align="center">
                  <span
                    className="pt-icon pt-icon-document-open"
                    style={{ margin: '0 .75rem 0 0.25rem', color: '#444' }}
                  />
                  <label className="pt-file-upload">
                    <input
                      type="file"
                      multiple
                      aaccept=".tsv,.csv,.txt"
                      onChange={this.handleFileUpload}
                    />
                    <span className="pt-file-upload-input">
                      Choose a file to upload...
                    </span>
                  </label>
                </Flex>
                {Object.keys(this.state.files || {}).length > 0 &&
                  <Text ellipsize>
                    {Object.keys(this.state.files).map(f =>
                      <Flex key={f} align="flex-start">
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            marginRight: '.5rem',
                          }}
                        >
                          {this.state.files[f].isLoading
                            ? <Spinner
                                value={this.state.files[f].progress}
                                className="pt-small"
                              />
                            : <span
                                style={{
                                  margin: '0 0.6rem 0 0.3rem',
                                }}
                                className="pt-icon pt-icon-confirm pt-intent-success"
                              />}
                        </div>
                        <Text ellipsize>
                          {f}
                        </Text>
                      </Flex>,
                    )}
                  </Text>}
              </div>
            </div>
            <div>
              <label className="pt-label" htmlFor="text-input">
                or enter a list of&nbsp;
                <Tooltip
                  className="pt-tooltip-indicator"
                  content={
                    <ul>
                      <li>
                        Mutation identifier: ICGC ID for Mutation. E.g. MU123
                      </li>
                      <li>
                        Delimiters between mutation identifiers: comma, space or
                        one mutation per line
                      </li>
                      <li>
                        If you upload a file, the file format should be a text
                        file (.txt, .csv, .tsv)
                      </li>
                    </ul>
                  }
                >
                  Mutation IDs
                </Tooltip>
              </label>
              <div className="pt-form-content">
                <textarea
                  disabled={this.state.isBusy}
                  id="text-input"
                  value={this.state.text}
                  onChange={event =>
                    this.setState({
                      text: event.target.value,
                    })}
                  className="pt-input pt-fill"
                  dir="auto"
                />
              </div>
            </div>
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <Button text="Cancel" onClick={this.closeDialog} />
              <Button
                text="Clear"
                disabled={!this.state.text.length > 0}
                onClick={event =>
                  this.setState({
                    text: '',
                  })}
              />
              <Button
                disabled={!this.state.text.length > 0}
                intent={Intent.PRIMARY}
                onClick={this.closeDialog}
                text="Submit"
              />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }

  openDialog = () => this.setState({ isOpen: true });
  closeDialog = () => {
    console.log(initState);
    this.setState(initState);
  };
}

export default UploadIds;
